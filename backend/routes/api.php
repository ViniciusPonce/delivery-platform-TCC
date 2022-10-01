<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => [
        'api',
        'cors'
    ], 
    'prefix' => 'customer'
], function ($routes) {

    Route::get('/{id}', 'CustomerController@view');
    Route::post('/register', 'CustomerController@create');

});

Route::group(['middleware' => [
    'api',
    'cors'
], 
'prefix' => 'customerAddress'
], function ($routes) {

Route::post('/create/{id}', 'CustomerAddressController@create');


});

Route::group(['middleware' => [
    'api',
    'cors',
    'tenant'
],
'prefix' => 'store'
], function ($routes) {
    Route::post('/create', 'StoreController@create');
});