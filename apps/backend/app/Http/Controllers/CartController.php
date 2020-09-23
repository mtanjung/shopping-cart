<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function get()
    {
        $session_id = session_id();
        $is_cart_exist = Cart::where('session_id', '=', $session_id)->first();
        $results = [];

        if ($is_cart_exist) {
            $cart_id = $is_cart_exist->id;
            $results = CartItem::join('product', 'product.id', '=', 'cart_item.product_id')
                ->where('cart_id', '=', $cart_id)
                ->get(['cart_item.product_id AS product_id', 'product.title AS product_title',
                'cart_item.quantity', 'product.price']);
        }
        
        return response()->json($results);
    }

    /*
     * The Laravel query builder uses PDO parameter binding to protect your application against
     * SQL injection attacks. There is no need to clean strings being passed as bindings.
     */
    public function update(Request $request)
    {
        $session_id = session_id();

        // Check if session already exist
        $is_session_exist = Cart::where('session_id', '=', $session_id)->first();

        if (!$is_session_exist) {
            $cart = new Cart;
            $cart->session_id = $session_id;
            $cart->save();
            $cart_id = $cart->id;
        } else {
            $cart_id = $is_session_exist->id;
        }

        // Loop and insert all the cart items
        $post_data = $request->all();

        // Collection of current cart items
        $cart_item_product_ids = [];
        foreach ($post_data as $item) {
            // Find the item in if already exist, if so just update the quantity
            $is_item_in_cart = CartItem::where([
                ['cart_id', '=', $cart_id],
                ['product_id', '=', $item['product_id']]
            ])->first();

            if ($is_item_in_cart) {
                $is_item_in_cart->quantity = $item['quantity'];
                $is_item_in_cart->save();
                $cart_item_product_id = $is_item_in_cart->product_id;
            } else {
                $cart_item = new CartItem;
                $cart_item->cart_id = $cart_id;
                $cart_item->product_id = $item['product_id'];
                $cart_item->quantity = $item['quantity'];
                $cart_item->save();
                $cart_item_product_id = $cart_item->product_id;
            }

            $cart_item_product_ids[] = $cart_item_product_id;
        }

        // Delete product from cart_item
        CartItem::whereNotIn('product_id', $cart_item_product_ids)
        ->where('cart_id', '=', $cart_id)
        ->delete();
    }

    /*
    public function delete(Request $request)
    {
        $session_id = session_id();

        $post_data = $request->all();
        // Check if session already exist
        $is_session_exist = Cart::where('session_id', '=', $session_id)->first();
        $cart_id = $is_session_exist->id;

        // Delete the item
        $is_item_in_cart = CartItem::where([
            ['cart_id', '=', $cart_id],
            ['product_id', '=', $item['product_id']]
        ])->delete();
    }
    */
}
