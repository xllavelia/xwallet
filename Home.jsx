import React, {useState, useEffect } from "react";

// git add .
//  git commit -m "added progress row with percent"
// git push origin master

const Home = () => {
  
const [usdRate, setUsdRate] = useState(0); // Курс доллара
const [btcRate, setBtcRate] = useState(0); // Курс биткоина в рублях

useEffect(() => {
    const updateRates = async () => {
      try {
        // 1. Получаем курс доллара к рублю
        const usdRes = await fetch('https://open.er-api.com/v6/latest/USD');
        const usdData = await usdRes.json();
        if (usdData && usdData.rates) {
          setUsdRate(usdData.rates.RUB.toFixed(2));
        }

        // 2. Получаем курс биткоина к доллару
        const btcRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const btcData = await btcRes.json();
        if (btcData && btcData.bitcoin) {
          setBtcRate(btcData.bitcoin.usd);
        }
      } catch (error) {
        console.error("Ошибка обновления курсов:", error);
      }
    };

    updateRates(); // Вызов при загрузке
    const interval = setInterval(updateRates, 60000); // Обновление каждую минуту

    return () => clearInterval(interval); // Очистка таймера
  }, []);

return (
    
<div>
<div className="sidebar">
  {/* Этот блок — только для размытой картинки */}
  <div className="sidebar-background"></div>
  
  {/* Этот блок — для твоих кнопок и маршрутизации */}
  <div className="sidebar-content">
     <div className="Karta-home-div">
    {/* <div className="karta-home-img"> </div> */}
<button className="Karta-home-button">
  <h5 className="Karta-home-button-h5">xlavelia</h5> 
  <br />
  <h1 className="Karta-home-button-h1"> <span className="Karta-home-button-balance">12.500$</span><span className="Karta-home-button-span"> X </span> </h1>   
<br />

</button>


    </div>
  </div>
</div>

   
    
{/* 
   <div className="Fast-button">
    <div className="Send-div">
   <svg fill="#ffffffff" width="" height="" className="Send-svg" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>angle-top</title>
<path d="M0.84 20.040c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.88-0.32 1.2 0l6.44 6.44c0.32 0.32 0.32 0.84 0 1.2-0.32 0.32-0.84 0.32-1.2 0l-5.84-5.84-5.84 5.84c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>
</svg>
  </div>
 <div className="Add-div">
  <svg fill="#ffffffff" width="" height="" className="Add-svg" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>angle-top</title>
<path d="M0.84 20.040c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.88-0.32 1.2 0l6.44 6.44c0.32 0.32 0.32 0.84 0 1.2-0.32 0.32-0.84 0.32-1.2 0l-5.84-5.84-5.84 5.84c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>
</svg>

</div>
 <div className="Reqest-div">
<svg fill="#ffffffff" width="800px" height="800px" className="Reqest-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<g data-name="Layer 2">

<g data-name="swap">

<rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/>

<path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z"/>

<path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z"/>

</g>

</g>

</svg>
</div>
 <div className="Freeze-div">
<svg fill="#ffffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="" height="" className="Freeze-svg" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g>
 <path d="M54.284,44.798V34.688c3.297,0.807,6.52,2.344,9.157,4.762l0.011-0.015c0.197,0.157,0.436,0.265,0.708,0.265
  c0.358,0,0.665-0.173,0.877-0.428l0.015,0.003l4.262-6.008l-0.01-0.005c0.175-0.202,0.291-0.458,0.291-0.746
  c0-0.34-0.153-0.638-0.387-0.849c-3.953-3.651-9-5.843-14.924-6.502v-5.806h-0.001c0-0.637-0.516-1.153-1.153-1.153h-4.578
  c-0.637,0-1.153,0.516-1.153,1.153v5.659c-9.89,1.025-15.75,7.326-15.75,14.725c0,9.963,8.205,12.82,15.75,14.652v11.354
  c-4.845-0.868-8.827-3.379-11.536-6.19c-0.019-0.021-0.039-0.039-0.06-0.058c-0.016-0.017-0.036-0.034-0.052-0.051l-0.008,0.011
  c-0.199-0.162-0.442-0.273-0.719-0.273c-0.436,0-0.802,0.251-0.998,0.608l-0.014-0.002l-4.125,6.124l0.005,0.01
  c-0.176,0.202-0.292,0.458-0.292,0.748c0,0.367,0.182,0.679,0.448,0.89l-0.011,0.016c4.029,4.029,9.67,6.959,17.362,7.619v5.44
  c0,0.637,0.516,1.153,1.153,1.153h0h4.578c0.637,0,1.153-0.517,1.153-1.153h0.001V75.2c10.769-1.1,16.117-7.398,16.117-15.531
  C70.401,49.634,61.903,46.702,54.284,44.798z M47.398,43.112c-3.003-0.951-5.055-2.051-5.055-4.176c0-2.49,1.832-4.248,5.055-4.688
  V43.112z M54.284,65.896v-9.816c3.224,1.025,5.495,2.199,5.495,4.615C59.779,63.04,58.02,65.163,54.284,65.896z"/>
</g>
</svg>
    </div> 
    </div> */}
  

  
{/* <div className="home-goal-img"></div> */}
<div className="home-activ-goal-parent">
  <div className="home-activ-goal">
    
    {/* Левая часть: Текстовый блок */}
    <div className="home-goal-text">
      <h1 className="home-goal-text-h1">Set a new goal</h1>
      <h3 className="home-goal-text-h3">Reach more goals</h3>
    </div>

    {/* Правая часть: Кнопка с плюсом */}
    <button className="home-goal-plus-btn">
      <div className="home-goal-plus-bg"></div>
      <svg className="home-goal-plus-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12 20L12 12M12 12L12 4M12 12L20 12M12 12L4 12" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </button>

  </div>
</div>

<div className="home-text-mr-parent"><h1 className="home-text-mr">Monthly Report</h1></div>

<div className="home-activ-history-parent">

     {/* <button className="home-history-st-btn">
      <div className="home-history-st-bg"></div>
     
    </button> */}
    <fieldset className="home-activ-history">
    <legend>
         <span className="home-history-text-span-pr">75%</span>
   
</legend>
 
    {/* Левая часть: Текстовый блок outcomes*/}
   <div className="home-history-text">
    <h1 className="home-history-text-h1">
     <svg fill="#ffffffff" width="" height="" className="home-history-st-svg" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>angle-top</title>
<path d="M0.84 20.040c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.88-0.32 1.2 0l6.44 6.44c0.32 0.32 0.32 0.84 0 1.2-0.32 0.32-0.84 0.32-1.2 0l-5.84-5.84-5.84 5.84c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>
</svg>
            Incomes     
   
        <span className="home-history-text-span">7.500$</span>
    </h1>

 <div className="home-history-text-graf-grandparent">
    <div className="home-history-text-graf-parent">
        <div className="home-history-text-graf"></div>
        
    </div>
</div>

</div>
    {/* Правая часть: Кнопка сo стрелкой */}
   </fieldset>
  </div>

  
<div className="home-out-activ-history-parent">

     {/* <button className="home-history-st-btn">
      <div className="home-history-st-bg"></div>
     
    </button> */}
    <fieldset className="home-out-activ-history">
    <legend>
         <span className="home-out-history-text-span-pr">25%</span>
   
</legend>
 
    {/* Левая часть: Текстовый блок outcomes*/}
   <div className="home-out-history-text">
    <h1 className="home-out-history-text-h1">
     <svg fill="#ffffffff" width="" height="" className="home-out-history-st-svg" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>angle-top</title>
<path d="M0.84 20.040c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.88-0.32 1.2 0l6.44 6.44c0.32 0.32 0.32 0.84 0 1.2-0.32 0.32-0.84 0.32-1.2 0l-5.84-5.84-5.84 5.84c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>
</svg>
  
   Outcomes     
   
        <span className="home-out-history-text-span">2.500$</span>
    </h1>

 <div className="home-out-history-text-graf-grandparent">
    <div className="home-out-history-text-graf-parent">
        <div className="home-out-history-text-graf"></div>
        
    </div>
</div>

</div>
    {/* Правая часть: Кнопка сo стрелкой */}
   </fieldset>
  </div>

{/* <div className="home-ustd">
<h1  className="let-ustd"> {usdRate} ₽ <span  className="home-span-ustd">ustd</span></h1>
</div>
<div className="home-btc">
<h1 className="let-btc"> <span>
  {Number(btcRate).toLocaleString('en-US')} $
</span> <span className="home-span-btc">btc</span></h1>
</div> */}


<div className="lend-div">
<div className="lend">

<svg width="" height="" className="lend-wallet" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<path d="M20 9.71429V6.28571C20 5.02335 19.1046 4 18 4H4C2.89543 4 2 5.02335 2 6.28571V17.7143C2 18.9767 2.89543 20 4 20H18C19.1046 20 20 18.9767 20 17.7143V14.2857M22 9.71429H16C14.8954 9.71429 14 10.7376 14 12C14 13.2624 14.8954 14.2857 16 14.2857H22V9.71429Z" stroke="" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg fill="#ffffffff" width="" height="" className="lend-portfolio" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><path d="M28,10H22V6a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v4H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V12A2,2,0,0,0,28,10ZM12,6h8v4H12ZM4,26V12H28V26Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="" height=""/></svg>

<svg width="" height="" className="lend-seting" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="style=linear">
<g id="setting">
<path id="vector" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#ffffffff" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="vector_2" d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#ffffffff" stroke-width="0.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
</div>
</div>

    </div>
  );
}
export default Home;