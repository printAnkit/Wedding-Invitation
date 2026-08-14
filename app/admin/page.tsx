"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMG } from "../components/assets";

interface RSVPResponse {
  id: number;
  name: string;
  phone: string;
  attendance: "yes" | "no";
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [responses, setResponses] = useState<RSVPResponse[]>([]);
  const [responsesLoading, setResponsesLoading] = useState(false);
  const [responsesError, setResponsesError] = useState("");

  // Search and Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYes, setFilterYes] = useState(true);
  const [filterNo, setFilterNo] = useState(true);

  // Check auth status on mount
  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    setResponsesLoading(true);
    try {
      const res = await fetch("/api/admin/responses");
      if (res.status === 401) {
        setIsAuthenticated(false);
        setResponsesLoading(false);
        return;
      }
      if (!res.ok) {
        throw new Error("Failed to load responses");
      }
      const data = await res.json();
      setResponses(data.responses || []);
      setIsAuthenticated(true);
    } catch (err: any) {
      setResponsesError(err.message || "An error occurred");
    } finally {
      setResponsesLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      setIsAuthenticated(true);
      fetchResponses();
    } catch (err: any) {
      setLoginError(err.message || "Invalid credentials");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setIsAuthenticated(false);
      setResponses([]);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  // Filtered responses based on search and checkboxes
  const filteredResponses = responses.filter((res) => {
    const matchesSearch =
      res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.phone.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      (res.attendance === "yes" && filterYes) ||
      (res.attendance === "no" && filterNo);

    return matchesSearch && matchesFilter;
  });

  // Calculate metrics
  const totalRSVPs = responses.length;
  const totalAttending = responses.filter((r) => r.attendance === "yes").length;
  const totalDeclined = responses.filter((r) => r.attendance === "no").length;

  const downloadCSV = () => {
    if (filteredResponses.length === 0) return;
    
    const headers = ["Name", "Mobile Number", "Attending", "Submitted Date"];
    const rows = filteredResponses.map((res) => [
      res.name,
      res.phone,
      res.attendance === "yes" ? "Yes" : "No",
      new Date(res.created_at).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" + // Add BOM for excel format
      [headers.join(","), ...rows.map((e) => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Wedding_RSVPs_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isAuthenticated === null || (responsesLoading && responses.length === 0)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ivory text-sage">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-sage border-t-transparent" />
        <p className="mt-4 font-serif italic">Loading guestbook dashboard...</p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-ivory text-ink-soft py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative floral backgrounds */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none overflow-hidden">
        <Image src={IMG.mainBg} alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            /* Login Screen */
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center items-center min-h-[70vh]"
            >
              <div className="w-full max-w-md bg-paper border border-gold-light/20 shadow-xl rounded-2xl p-8 backdrop-blur-xs">
                <div className="text-center mb-8">
                  <span className="block font-label text-xs uppercase tracking-widest-lg text-sage">
                    Wedding Admin Portal
                  </span>
                  <h1 className="mt-2 font-symphony text-4xl text-gold-dark">
                    Guestbook Login
                  </h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block font-serif text-sm italic text-sage mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-sage bg-transparent px-1 py-2 font-serif text-lg text-sage-dark focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block font-serif text-sm italic text-sage mb-1">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-b border-sage bg-transparent px-1 py-2 font-serif text-lg text-sage-dark focus:border-gold focus:outline-none"
                    />
                  </div>

                  {loginError && (
                    <p className="font-serif text-sm text-rose-dark text-center italic bg-rose/10 py-2 rounded-md">
                      {loginError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loginLoading}
                    className="w-full rounded-full bg-slate py-3 font-script text-xl italic text-gold-light underline decoration-gold-light underline-offset-4 transition-colors hover:bg-slate-dark cursor-pointer disabled:opacity-75"
                  >
                    {loginLoading ? "Authenticating..." : "Enter Guestbook"}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Dashboard Screen */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gold-light/20 pb-6">
                <div>
                  <span className="block font-label text-xs uppercase tracking-widest-lg text-sage text-center sm:text-left">
                    Spara Wedding Invites
                  </span>
                  <h1 className="mt-1 font-symphony text-4xl text-gold-dark text-center sm:text-left">
                    RSVP Ledger Dashboard
                  </h1>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-full border border-rose text-rose font-serif text-sm italic transition-colors hover:bg-rose hover:text-white cursor-pointer"
                >
                  Logout
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-paper border border-gold-light/20 rounded-xl p-6 shadow-md text-center">
                  <span className="block font-serif text-sm italic text-sage">Total Responses</span>
                  <span className="block mt-2 font-symphony text-5xl text-gold-dark">{totalRSVPs}</span>
                </div>
                <div className="bg-paper border border-gold-light/20 rounded-xl p-6 shadow-md text-center">
                  <span className="block font-serif text-sm italic text-sage">Attending (Yes)</span>
                  <span className="block mt-2 font-symphony text-5xl text-sage">{totalAttending}</span>
                </div>
                <div className="bg-paper border border-gold-light/20 rounded-xl p-6 shadow-md text-center">
                  <span className="block font-serif text-sm italic text-sage">Declined (No)</span>
                  <span className="block mt-2 font-symphony text-5xl text-rose-dark">{totalDeclined}</span>
                </div>
              </div>

              {/* Filters & Actions Bar */}
              <div className="bg-paper border border-gold-light/10 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Search */}
                <div className="w-full md:w-1/3">
                  <label htmlFor="search" className="block font-serif text-sm italic text-sage mb-1">
                    Search Guest
                  </label>
                  <input
                    id="search"
                    type="text"
                    placeholder="Enter name or mobile..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-b border-sage bg-transparent px-1 py-1.5 font-serif text-base text-sage-dark focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Filter Checkboxes */}
                <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-center">
                  <span className="font-serif text-sm italic text-sage">Filter:</span>
                  <label className="flex items-center gap-2.5 cursor-pointer font-serif text-base text-sage-dark">
                    <input
                      type="checkbox"
                      checked={filterYes}
                      onChange={(e) => setFilterYes(e.target.checked)}
                      className="rounded border-rose text-rose focus:ring-rose h-4 w-4"
                    />
                    Attending (Yes)
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer font-serif text-base text-sage-dark">
                    <input
                      type="checkbox"
                      checked={filterNo}
                      onChange={(e) => setFilterNo(e.target.checked)}
                      className="rounded border-rose text-rose focus:ring-rose h-4 w-4"
                    />
                    Declined (No)
                  </label>
                </div>

                {/* Download Actions */}
                <div className="w-full md:w-auto flex justify-end">
                  <button
                    onClick={downloadCSV}
                    disabled={filteredResponses.length === 0}
                    className="w-full md:w-auto px-6 py-2.5 rounded-full bg-slate font-serif text-sm italic text-gold-light hover:bg-slate-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Export CSV ({filteredResponses.length})
                  </button>
                </div>
              </div>

              {/* Data Table / List */}
              <div className="bg-paper border border-gold-light/20 rounded-xl shadow-md overflow-hidden">
                {filteredResponses.length === 0 ? (
                  <div className="p-12 text-center text-sage font-serif italic">
                    No RSVP records match your search criteria.
                  </div>
                ) : (
                  <>
                    {/* Desktop Table View */}
                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-card-fill border-b border-gold-light/20 text-sage font-serif">
                            <th className="px-6 py-4 italic font-medium">Guest Name</th>
                            <th className="px-6 py-4 italic font-medium">Mobile Number</th>
                            <th className="px-6 py-4 italic font-medium">Attending?</th>
                            <th className="px-6 py-4 italic font-medium">Submission Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gold-light/10 font-serif">
                          {filteredResponses.map((res) => (
                            <tr key={res.id} className="hover:bg-ivory/30 transition-colors">
                              <td className="px-6 py-4 text-sage-dark font-medium">{res.name}</td>
                              <td className="px-6 py-4 text-sage-dark">{res.phone}</td>
                              <td className="px-6 py-4">
                                <span
                                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                    res.attendance === "yes"
                                      ? "bg-sage/10 text-sage-dark border border-sage/20"
                                      : "bg-rose/10 text-rose-dark border border-rose/20"
                                  }`}
                                >
                                  {res.attendance === "yes" ? "Yes" : "No"}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-sage/80">
                                {new Date(res.created_at).toLocaleString("en-IN", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile List View */}
                    <div className="block sm:hidden divide-y divide-gold-light/10">
                      {filteredResponses.map((res) => (
                        <div key={res.id} className="p-4 space-y-2 hover:bg-ivory/30">
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif font-medium text-sage-dark">{res.name}</h3>
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                                res.attendance === "yes"
                                  ? "bg-sage/10 text-sage-dark border border-sage/20"
                                  : "bg-rose/10 text-rose-dark border border-rose/20"
                              }`}
                            >
                              {res.attendance === "yes" ? "Yes" : "No"}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-sage">{res.phone}</span>
                            <span className="text-sage/60">
                              {new Date(res.created_at).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
