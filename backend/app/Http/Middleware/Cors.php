<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        // Log::info("Using cors for " . $request);
        return $next($request)
        ->header('Access-Control-Allow-Origin', "*")
        ->header('Access-Control-Allow-Methods', "PUT, POST, DELETE, GET, OPTION")
        ->header('Access-Control-Allow-Headers', "Content-Type, X-Auth-Token, Origin, Authorization");
    }
}
