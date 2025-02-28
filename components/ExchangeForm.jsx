import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw } from 'lucide-react';

const ExchangeForm = () => {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState({});
  const [lastUpdated, setLastUpdated] = useState('');
  
  // Fetch available currencies
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        
        if (data && data.rates) {
          setCurrencies(data.rates);
          
          // Format date to display last updated
          const date = new Date(data.time_last_update_utc);
          setLastUpdated(date.toLocaleString());
        }
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    
    fetchCurrencies();
  }, []);
  
  // Handle currency conversion
  const convertCurrency = async () => {
    if (!amount || isNaN(amount) || !fromCurrency || !toCurrency) return;
    
    setLoading(true);
    
    try {
      const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await response.json();
      
      if (data && data.rates && data.rates[toCurrency]) {
        const rate = data.rates[toCurrency];
        const convertedAmount = (parseFloat(amount) * rate).toFixed(4);
        
        setResult({
          amount: parseFloat(amount),
          from: fromCurrency,
          to: toCurrency,
          rate,
          convertedAmount: parseFloat(convertedAmount),
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error converting currency:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter amount"
              min="0"
              step="any"
            />
          </div>
          
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="col-span-2">
              <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From
              </label>
              <select
                id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {Object.keys(currencies).sort().map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={swapCurrencies}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <RefreshCw className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </button>
            </div>
            
            <div className="col-span-2">
              <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To
              </label>
              <select
                id="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {Object.keys(currencies).sort().map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <button
            onClick={convertCurrency}
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Convert</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
          {result ? (
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white font-serif">
                Conversion Result
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>Amount</span>
                  <span>Rate: 1 {result.from} = {result.rate.toFixed(4)} {result.to}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result.amount.toLocaleString()} {result.from}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {result.convertedAmount.toLocaleString()} {result.to}
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: {new Date(result.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-4">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 font-serif">
                Ready to Convert
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fill in the details and click "Convert" to see the results here.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {Object.keys(currencies).length > 0 && (
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>Data provided by Open Exchange Rates API</p>
          <p>Last updated: {lastUpdated}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ExchangeForm;
