<template>
  <div class="my-16">
    <span class=" text-center  ">
        <h1 class=" text-4xl font-bold">
            Our Services
        </h1>
    </span>
    <div class="grid  max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-1">
      <div class="col-span-2">
        <img src="/public/delivery-boy.png" class="max-w-full  rounded-lg"/>
      </div>
      <div class=" col-span-2">
        <div class="grid grid-rows-2 justify-between gap-2">
            <div class="grid grid-cols-3  max-sm:grid-cols-1 gap-1">
              <div class="card shadow-lg w-full"   >
                <div class="card-body text-center">
                  <div class="card-title justify-center">
                    <span>
                      <h1 class="text-primary">Express Delivery</h1>
                      <Icon
                        name="tabler:truck-delivery"
                        class="w-8 h-8 text-primary"
                      />
                    </span>
                  </div>
                  <p>
                    Fast and efficient delivery service tailored to meet urgent
                    needs.
                  </p>
                </div>
              </div>
              <div class="card shadow-lg w-full col-span-1">
                <div class="card-body text-center">
                  <div class="card-title justify-center">
                    <span>
                      <h1 class="text-primary">Pick Up</h1>
                      <Icon
                        name="game-icons:card-pickup"
                        class="w-8 h-8 text-primary"
                      />
                    </span>
                  </div>
                  <p>Convenient pick-up service to streamline logistics.</p>
                </div>
              </div>
              <div class="card shadow-lg w-full col-span-1">
                <div class="card-body text-center">
                  <div class="card-title justify-center">
                    <span class="   ">
                      <h1 class="text-primary">Warehousing</h1>
                      <Icon
                        name="mdi:shield-house-outline"
                        class="w-8 h-8 text-primary"
                      />
                    </span>
                  </div>
                  <p>Secure storage solutions for your inventory or goods.</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-1">
              <div class="card shadow-lg w-full col-span-1">
                <div class="card-body text-center">
                  <div class="card-title justify-center">
                    <span>
                      <h1 class="text-primary">Packaging</h1>
                      <Icon
                        name="lucide:package-open"
                        class="w-8 h-8 text-primary "
                      />
                    </span>
                  </div>
                  <p>
                    Expert packaging services to ensure safe transit of items.
                  </p>
                </div>
              </div>
              <div class="card shadow-lg w-full col-span-1">
                <div class="card-body text-center">
                  <div class="card-title justify-center">
                    <span>
                      <h1 class="text-primary">Cash Collection</h1>
                      <Icon
                        name="streamline:subscription-cashflow"
                        class="w-8 h-8 text-primary"
                      />
                    </span>
                  </div>
                  <p>Secure and efficient collection of cash payments.</p>
                </div>
              </div>
              <div class="card shadow-lg w-full col-span-1">
                <div class="card-body text-center">
                  <div class="card-title justify-center">
                    <span>
                      <h1 class="text-primary">Call Center</h1>
                      <Icon
                        name="line-md:phone-call-loop"
                        class="w-8 h-8 text-primary"
                      />
                    </span>
                  </div>
                  <p>
                    Responsive call center services for effective communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
