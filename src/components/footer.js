const footer = () => {
  return (
    
    <footer class="container mx-auto pt-64">
    <section class="flex justify-between">
    <div class="flex-1">
    
        <h4 class="font-bold mb-8">Contacts</h4>
        <div class="flex">
          <div class="w-1/2">
            <h2 class="font-bold text-sm">Dhaka</h2>
            <h3 class="text-sm text-black-100"> 
              304/1 Free School Street,Mazumdar Tower
            </h3>
            <h6 class="text-orange-200 text-sm mt-4">maruf.ruet15@gmail.com</h6>
          </div>
          <div class="w-1/2">
            <h2 class="font-bold text-sm">Rangpur</h2>
            <span class="text-sm text-black-100">
              Radio Stuff Quarter, Dhap Engineer Para
            </span>
          </div>
        </div>
    
      </div>
    
      <div class="flex-1">
    
        <h4 class="font-bold mb-8">Usefull Links</h4>
        <div class="flex">
          <div class="flex flex-col w-1/2">
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Catalouge</a>
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Payment</a>
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Shipping</a>
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Feature</a>
          </div>
          <div class="flex flex-col w-1/2">
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Blog</a>
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Privacy policy</a>
            <a class="mb-3 text-sm text-black-100 hover:text-orange-200" href="#">Contact</a>
          </div>
        </div>
    
      </div>
    
      <div class="flex-1">
        <h1 class="font-bold mb-8">Register</h1>
        <form action="" class="flex flex-col">
          <label>Name
          <input class="border mb-6 border-orange-200 placeholder-black-100 p-2 text-sm rounded outline-none focus:shadow-outline" type="text"/>
          </label>
          <label> Email
          <input class="border mb-6 border-orange-200 placeholder-black-100 p-2 text-sm rounded outline-none focus:shadow-outline" type="text"/>
          </label>
          <button class="bg-orange-200 p-2 text-sm text-white rounded hover:bg-orange-400 uppercase">Register Now</button>
        </form>
      </div>
    </section>
    
    <section class="border-t border-gray-100 py-6 flex justify-between items-center mt-16">
      <div class="text-xs text-black-100"> @ 2022 All rights reserved to maruadon2</div>
      <div class="flex items-center">
        <a class="ml-12" href="#"><img src="../images/facebook.svg" alt=""/></a>
        <a class="ml-12" href="#"><img src="../images/twitter.svg" alt=""/></a>
        <a class="ml-12" href="#"><img src="../images/instagram.svg" alt=""/></a>
      </div>
    
    </section>
    </footer>
    
  );
};

export default footer;






























