<template>
  <div class="grid justify-center text-center gap-2   ">
    <div class="my-16 ">
      <span class=" flex justify-center gap-1">
        <h1 class="text-4xl font-bold">Seamless Delivery Journey  <Icon name="icon-park-outline:journey" class="w-8 h-8  text-secondary   "/></h1>
       
      </span>
 
      <p>From Pick-Up to Payment</p>
    </div>

    <ul class="timeline timeline-vertical">
      <li>
        <div class="timeline-start timeline-box text-start">
          <span class="max-sm:grid flex  items-end gap-2  justify-start align-middle   ">
            <Icon name="twemoji:pickup-truck" class="w-10 h-10"/>
            <h1 class="font-semibold uppercase ">Pick-Up Request : </h1>
          </span>
         
          <br />
          <ul class=" ">
            <li>User submits pick-up details online or via phone.</li>
            <li>Logistics team schedules pick-up and plans the route.</li>
          </ul>
        </div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <hr class="bg-secondary" />
      </li>
      <li>
        <hr class="bg-secondary" />
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box text-start">
          <span class="max-sm:grid flex  items-center gap-2  justify-start align-middle   ">
            <Icon name="twemoji:shuffle-tracks-button" class="w-8 h-8"/>
            <h1 class="font-semibold uppercase ">Transit & Tracking : </h1>
          </span>
          <br />
          <ul class=" ">
            <li>Package is collected and begins transit.</li>
            <li>Real-time tracking updates are provided to the user.</li>
          </ul>
        </div>
        <hr class="bg-secondary " />
        
      </li>
      <li class=" ">
        <hr class="bg-secondary  " />
        
        <div class="timeline-start timeline-box text-start">
          <span class="max-sm:grid flex  items-center gap-2  justify-start align-middle   ">
            <Icon name="twemoji:delivery-truck" class="w-8 h-8"/>
            <h1 class="font-semibold uppercase ">Delivery : </h1>
          </span>
          <br />
          <ul class=" ">
            <li>Delivery agent brings the package to the recipient's address.</li>
            <li>Recipient receives the package and confirms delivery.</li>
          </ul>
        </div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <hr class=" bg-primary " />
      </li>
      <li>
        <hr class=" bg-primary" />
        <div class="timeline-middle  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 text-primary"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box text-start  ">
          <span class=" max-sm:grid  flex  items-center gap-2  justify-start align-middle   ">
            <Icon name="fluent:payment-48-filled" class="w-8 h-8  text-primary "/>
            <h1 class="font-semibold uppercase text-primary ">Payment & Confirmation:</h1>
          </span>
          <br />
          <ul class=" ">
            <li>Recipient makes payment upon delivery (if applicable).</li>
            <li>Payment confirmation and receipt are provided.</li>
          </ul>
        </div>
       
      </li>
    </ul>
  </div>
</template>
