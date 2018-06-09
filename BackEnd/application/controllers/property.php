<?php

class Property extends CI_Controller {

    public function __construct(){
        parent :: __construct();
        $this->load->model('property_model');
    }

    public function get_Properties(){
        echo $this->property_model->get();
    }

    public function insert_Property(){
        echo $this->property_model->insert($this->input->post()) > 0 ? "true" : "false";
    }
    
    public function search_Property(){
        echo $this->property_model->search('search where');
    }
    
    public function update_Property(){
        echo $this->property_model->update('update where', 'where');
    }
    
    public function delete_Property(){
        echo $this->property_model->delete('delete where');
    }
    
    public function find_Property(){
        echo $this->property_model->update('what','where');
    }
}