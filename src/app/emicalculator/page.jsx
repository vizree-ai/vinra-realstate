"use client";
import EnquiryForm from "@/components/EnquiryForm";
import { useState, useMemo } from "react";

export default function EmiCalculatorPremium() {
  const [loan, setLoan] = useState(2500000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(7);
  const [open, setOpen] = useState(false);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  const emi = useMemo(() => {
    const val =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(val || 0);
  }, [loan, rate, years]);

  const total = emi * months;
  const interest = total - loan;

  const format = (n) => n.toLocaleString("en-IN");

  return (
    <>
      <section className="w-full bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat py-20 px-10 md:px-12 text-[#1E3D34]">
        <div
          className="absolute inset-0 opacity-60 pointer-events-none 
           [background-image:linear-gradient(90deg,rgba(30,61,52,0.08)_1px,transparent_1px),
           linear-gradient(180deg,rgba(30,61,52,0.06)_1px,transparent_1px)] 
           [background-size:44px_44px]"
        />{" "}
        {/* Heading */}
        <div className="mt-10 text-center ">
          {/* <h2 className="text-3xl md:text-5xl font-serif text-[#1E3D34]"> */}

          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1E3D34] leading-tight flex items-center justify-center gap-3">
            Plan Your Dream Home
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-[#1E3D34]">
            Calculate your monthly EMI instantly and make smarter property
            decisions.
          </p>
        </div>
        <div className="mt-15 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            {/* Loan */}
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="text-[#1E3D34] text-lg mb-3">Loan Amount</p>
                <span className="bg-white/10 px-4 py-1 rounded-full text-[#1E3D34] font-semibold">
                  ₹ {format(loan)}
                </span>
              </div>

              <input
                type="range"
                min={100000}
                max={10000000}
                step={50000}
                value={loan}
                onChange={(e) => setLoan(Number(e.target.value))}
                className="w-full accent-[#1E3D34]"
              />
            </div>

            {/* Tenure */}
            <div className="mb-4">
              <div className="flex justify-between ">
                <p className="text-[#1E3D34]  text-lg mb-3">Tenure (Years)</p>
                <span className="bg-white/10 px-4 py-1 rounded-full text-[#1E3D34] font-semibold">
                  {years}
                </span>
              </div>

              <input
                type="range"
                min={1}
                max={30}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[#1E3D34]"
              />
            </div>

            {/* Rate */}
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="text-[#1E3D34]  text-lg mb-3">Interest Rate</p>
                <span className="bg-white/10 px-4 py-1 rounded-full text-[#1E3D34] font-semibold">
                  {rate}%
                </span>
              </div>

              <input
                type="range"
                min={5}
                max={15}
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[#1E3D34]"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <p className="text-[#1E3D34] text-sm">Monthly EMI</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D34] mt-2">
              ₹ {format(emi)}
            </h2>

            <div className="mt-8 space-y-3 text-sm md:text-base">
              <div className="flex justify-between">
                <span className="text-[#1E3D34]">Principal</span>
                <span>₹ {format(loan)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#1E3D34]">Interest</span>
                <span>₹ {format(interest)}</span>
              </div>

              <div className="flex justify-between font-semibold border-t border-white/10 pt-3">
                <span>Total Amount</span>
                <span className="text-[#1E3D34]">₹ {format(total)}</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer mt-8 w-full bg-gradient-to-r from-[#1E3D34] via-[#7b5b2d] to-[#c4934a] text-white font-semibold py-3 rounded-xl hover:bg-[#b8903f] transition"
            >
              Talk To our Loan Expert
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F7F3EC] pt-20 px-10 md:px-12 pb-10">
        <div className="max-w-5xl mx-auto space-y-10 text-gray-800">
          <h1 className="text-2xl md:text-4xl font-serif text-[#1E3D34]">
            Home Loan EMI Calculator – FAQs | Vinra Estate
          </h1>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              What is a Home Loan EMI Calculator?
            </h2>
            <p className="mt-2 leading-relaxed text-sm md:text-base">
              The Vinra Estate Home Loan EMI Calculator is a simple and powerful
              online tool that helps you calculate your monthly home loan EMI
              (Equated Monthly Installment) in seconds. By entering the loan
              amount, interest rate, and tenure, you can instantly estimate your
              repayment and plan your property investment better.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              What is EMI in a Home Loan?
            </h2>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              EMI (Equated Monthly Installment) is the fixed monthly payment you
              make towards your home loan. It includes:
            </p>
            <ul className="list-disc pl-6 mt-2 text-sm md:text-base">
              <li>Repayment of the principal amount</li>
              <li>Payment of the interest charged by the lender</li>
            </ul>
            <p className="mt-2 text-sm md:text-base">
              Choosing a longer tenure (up to 30 years) can help reduce your EMI
              and make repayments more comfortable.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              How is Home Loan EMI Calculated?
            </h2>

            <p className="mt-2 text-sm md:text-base">
              Your EMI is calculated using a standard formula:
            </p>

            <div className="bg-white border border-[#e6d8b5] rounded-lg p-4 text-center font-medium text-[#1E3D34] mt-3">
              EMI = [P × R × (1 + R)<sup>N</sup>] / [(1 + R)<sup>N</sup> − 1]
            </div>

            <p className="mt-3 text-sm md:text-base">Where:</p>

            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>P = Loan Amount</li>
              <li>R = Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)</li>
              <li>N = Loan Tenure in months</li>
            </ul>

            <p className="mt-3 text-sm md:text-base">
              👉 Example: For a loan of ₹10,00,000 at 7.2% interest for 10
              years, your EMI will be approximately ₹11,714/month.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              Why Use the Vinra Estate Home Loan EMI Calculator?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Using the Vinra Estate EMI Calculator helps you:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Plan your monthly budget and financial commitments</li>
              <li>Compare different loan scenarios</li>
              <li>Check your home loan affordability</li>
              <li>Make smarter real estate investment decisions</li>
            </ul>
            <p className="mt-2 text-sm md:text-base">
              It eliminates guesswork and helps you move forward with
              confidence.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              How Does EMI Calculation Help in Buying a Home?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              With the Vinra Estate Home Loan EMI Calculator, you can:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Understand how much EMI you can comfortably afford</li>
              <li>Estimate your loan eligibility</li>
              <li>Plan your down payment and savings</li>
              <li>Avoid financial stress after purchase</li>
            </ul>
            <p className="mt-2 text-sm md:text-base">
              This ensures a smoother and well-planned home-buying journey.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              How to Use the Vinra Estate Home Loan EMI Calculator?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Using the calculator is quick and easy:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Enter your Loan Amount</li>
              <li>Choose your Loan Tenure (in years)</li>
              <li>Input the Interest Rate (% per annum)</li>
            </ul>

            <p className="mt-3 text-sm md:text-base">👉 Instantly get:</p>

            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Monthly EMI</li>
              <li>Total interest payable</li>
              <li>Total repayment amount</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              What is a Home Loan Amortization Schedule?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              A home loan amortization schedule shows a detailed breakdown of:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Monthly EMI payments</li>
              <li>Principal vs Interest components</li>
              <li>Outstanding loan balance over time</li>
            </ul>
            <p className="mt-2 text-sm md:text-base">
              The Vinra Estate calculator helps you visualize how your loan
              reduces over the years.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              What Factors Affect Your Home Loan EMI?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Your EMI depends on three key factors:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Loan Amount – Higher loan increases EMI</li>
              <li>Interest Rate – Higher rates increase EMI</li>
              <li>
                Loan Tenure – Longer tenure reduces EMI but increases total
                interest
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              What is a Pre-Approved Home Loan?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              A pre-approved home loan is an initial approval based on your:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Income</li>
              <li>Credit score</li>
              <li>Financial profile</li>
            </ul>

            <p className="mt-2 text-sm md:text-base">It helps you:</p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Know your budget in advance</li>
              <li>Speed up the buying process</li>
              <li>Gain better negotiation power when buying property</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E3D34]">
              Is the Vinra Estate EMI Calculator Accurate?
            </h2>
            <p className="mt-2 text-sm md:text-base">
              The Vinra Estate Home Loan EMI Calculator provides a highly
              accurate estimate based on your inputs. However:
            </p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              <li>Final EMI may vary depending on lender policies</li>
              <li>
                Additional charges (processing fees, insurance, etc.) are not
                included
              </li>
            </ul>

            <p className="mt-2 text-sm md:text-base">
              👉 Use it as a financial planning tool for better decision-making.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#e6d8b5]">
            <h3 className="font-semibold text-[#1E3D34] mb-2">
              Important Disclaimer
            </h3>
            <p className="text-sm md:text-base">
              The Vinra Estate Home Loan EMI Calculator is designed for general
              guidance and planning purposes only. Actual loan terms may vary
              based on financial eligibility and lender policies. 👉 NRIs should
              enter their net income for more accurate estimates.
            </p>
          </div>
        </div>
      </section>
      <EnquiryForm open={open} setOpen={setOpen} />
    </>
  );
}
