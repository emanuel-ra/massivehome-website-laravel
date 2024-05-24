<?php

namespace App\Http\Controllers;

use App\Models\Category;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function GetCategories()
    {
        $result = Category::with('children')->where('parent_id', 0)->get();
        return Response()->json($result);
    }
}
