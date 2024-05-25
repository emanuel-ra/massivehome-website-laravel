<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class HeaderComponent extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        // navigation
        // menu
        //['label' => 'branches', 'type' => 'navigation', 'route' => '', 'children' => array()],
        $menu = array(
            ['label' => 'new', 'type' => 'navigation', 'route' => 'test', 'children' => array()],
            ['label' => 'categories', 'type' => 'menu', 'route' => null, 'children' => array()],
            ['label' => 'branches', 'type' => 'navigation', 'route' => 'test', 'children' => array()],
            ['label' => 'liquidations', 'type' => 'navigation', 'route' => 'test', 'children' => array()],
        );
        return view('components.header-component');
    }
}
