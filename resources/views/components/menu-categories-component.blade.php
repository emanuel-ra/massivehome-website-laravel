<div class="w-full h-dvh absolute bg-black/50 top-0 z-50 transition ease-in-out hidden " id="categoriesContainer">

    <div class="lg:w-[400px] h-full bg-[#F5F5F5] relative ">
         <!-- LOGO -->
        <div class="w-full mb-5 ">
            <div class="flex justify-center items-center py-4">
                <a href="{{ route('home')}}">
                    <img src="/images/logo.webp" class="w-48 h-auto" alt="{{__('alt.logo')}}">
                </a>
            </div>
            <div class="absolute top-7 right-10 text-slate-800">
                <button aria-label="Close menu categories" onclick="toggleCategoryContainer()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </div>

         {{-- Menu --}}

        <div class="w-full ">
            <ul class="capitalize flex flex-col gap-y-2 text-slate-800 ">
                @foreach ($categories as $catagory)
                    <li class="group hover:bg-white transition">
                        <a aria-label="{{$catagory["name"]}}" href="" class="px-4 flex justify-between hover:text-red-600 hover:font-semibold transition ease-in-out">
                            {{$catagory["name"]}}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden group-hover:block transition">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>

                        @if (count($catagory['children']))

                                <div class="absolute -right-[800px] top-[20%] bg-white h-[600px] w-[800px] border p-10  flex-wrap gap-x-4 overflow-y-auto hidden group-hover:flex transition ease-in-out delay-300">
                                    @foreach ($catagory['children'] as $child)
                                        <div class="grow">
                                            <div class="border-b-2 py-2 font-semibold text-slate-600 hover:text-slate-950 hover:text-red-600 hover:font-semibold transition">
                                                <a href="">{{$child["name"]}}</a>
                                            </div>
                                            <div class="">
                                                @if (count($child["children"]))
                                                    <ul>
                                                        @foreach ($child["children"] as $grandchildren)
                                                            <li>
                                                                <a class="hover:text-red-600 hover:font-semibold transition" href="">{{$grandchildren['name']}}</a>
                                                            </li>
                                                        @endforeach
                                                    </ul>
                                                @endif
                                            </div>
                                        </div>
                                    @endforeach
                                </div>

                        @endif

                    </li>
                    {{-- CHILDREN --}}



                @endforeach
            </ul>
        </div>
    </div>


</div>
