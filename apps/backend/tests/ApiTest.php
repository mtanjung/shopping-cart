<?php

class ApiTest extends TestCase
{
  public function testApiGetProducts()
  {
    $response = $this->call('GET', '/products');
    $this->assertEquals(200, $response->status());
  }

  public function testShouldReturnAllProducts()
  {
    $this->get("/products", []);
    $this->seeStatusCode(200);
    $this->seeJsonStructure(['*' => [
      'id',
      'title',
      'summary',
      'sku',
      'price',
      'quantity'
    ]]);
  }
  
  public function testApiGetCarts()
  {
    $response = $this->call('GET', '/carts');
    $this->assertEquals(200, $response->status());
  }

  public function testApiPostCarts()
  {
    $response = $this->call('POST', '/carts');
    $this->assertEquals(200, $response->status());
  }

  public function testShouldCreateCart()
  {
    $parameters =  [[
      'product_id' => '999', 
      'product_title' => 'Test product',
      'price' => '999',
      'quantity' => '999'
    ]];

    $this->post("/carts", $parameters, []);
    $this->seeStatusCode(200);
  }

  // @todo: add testing data clean up
}
