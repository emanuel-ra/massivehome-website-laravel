@extends('app')
@section('content')
    <h1 class="sr-only">{{__('Massive Home')}}</h1>
    {{-- BANNER --}}
    <main class="max-w-[1920px] m-auto flex flex-col justify-center items-center">
        <section class="w-full">
            <img src="/images/banner.webp" class="w-full h-full" alt="Nuevo año - Nuevos productos">
        </section>
        <section class="flex px-24 py-10">
            <img src="/images/all-logos.webp" alt="">
        </section>
    </main>
@endsection
