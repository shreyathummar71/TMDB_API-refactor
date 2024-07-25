document.addEventListener("DOMContentLoaded",()=>{e()});const e=()=>{let e=document.getElementById("favorites-container");e.innerHTML="";let d=JSON.parse(localStorage.getItem("cart"))||[];e.classList.add("grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-x-4","gap-y-4","px-2","py-10","mx-auto","mt-8","mb-8","md:ml-10","md:mr-10","justify-items-center","items-center"),d.forEach(t=>{let d=document.createElement("div");d.classList.add("max-w-md","rounded-lg","shadow-lg","m-2","h-auto","w-full"),d.innerHTML=`
        <img src="${t.poster_path}" alt="${t.title}" class="w-full h-auto object-cover">
        <div class="px-6 py-4 h-auto w-full">
          <div class="font-bold text-xl mb-2 truncate">${t.title}</div>
          <div class="font-medium text-m mb-2">Personal Notes:</div>
          <p class="text-gray-700 text-base truncate" id="notes-${t.id}">${t.notes||"No notes added."}</p>
          <textarea id="note-input-${t.id}" class="mt-2 p-2 border rounded w-full" placeholder="Add your personal note here"></textarea>
          <button class="save-note bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2" data-id="${t.id}">Save Note</button>
        </div>
      `,e.appendChild(d)}),document.querySelectorAll(".save-note").forEach(e=>{e.addEventListener("click",t)})},t=e=>{let t=e.target.getAttribute("data-id"),d=document.getElementById(`note-input-${t}`).value,o=JSON.parse(localStorage.getItem("cart"))||[];o=o.map(e=>e.id===t?{...e,notes:d}:e),localStorage.setItem("cart",JSON.stringify(o)),document.getElementById(`notes-${t}`).innerText=d||"No notes added.",document.getElementById(`note-input-${t}`).value="";let a=document.createElement("div");a.classList.add("fixed","bottom-auto","left-auto","right-5","top-5","transform","bg-green-500","text-white","py-2","px-4","rounded","shadow-lg","z-50"),a.innerText="Your note has been saved!",document.body.appendChild(a),setTimeout(()=>{a.remove()},3e3)};
//# sourceMappingURL=journal.2f4e9bd1.js.map
