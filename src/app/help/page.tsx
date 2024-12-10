function Help() {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <section className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p className="text-gray-600">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Diners Club</li>
            <li>Discover</li>
            <li>American Express</li>
            <li>Visa Electron</li>
            <li>Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-600 mt-4">
            If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          <p className="text-gray-600 mt-2">
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
          </p>
        </section>
  
        <div className="flex space-x-4 mb-8">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md uppercase  transition">
           <a href="/joinus">Join us</a>
          </button>
          <button className="px-6 py-3  bg-black text-white font-medium rounded-lg shadow-md transition uppercase">
            shop nike
          </button>
        </div>
  
        <section className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h1>
          
          <h2 className="text-xl font-medium text-gray-700 mb-2">
            Does my card need international purchases enabled?
          </h2>
          <p className="text-gray-600">
            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
          </p>
          <p className="text-gray-600 mt-2">
            Please note, some banks may charge a small transaction fee for international orders.
          </p>
          
          <h2 className="text-xl font-medium text-gray-700 mt-6 mb-2">
            Can I pay for my order with multiple methods?
          </h2>
          <p className="text-gray-600">
            No, payment for Nike orders can't be split between multiple payment methods.
          </p>
  
          <h2 className="text-xl font-medium text-gray-700 mt-6 mb-2">
            What payment method is accepted for SNKRS orders?
          </h2>
          <p className="text-gray-600">
            You can use any accepted credit card to pay for your SNKRS order.
          </p>
  
          <h2 className="text-xl font-medium text-gray-700 mt-6 mb-2">
            Why don't I see Apple Pay as an option?
          </h2>
          <p className="text-gray-600">
            To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
          </p>
        </section>
  
        <footer className="mt-8">
          <h1 className="text-lg font-semibold text-gray-800">
            Was this answer helpful?
          </h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm">
              WHAT ARE NIKE'S DELIVERY OPTIONS?
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </span>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Help;
  