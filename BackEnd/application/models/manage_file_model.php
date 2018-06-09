<?php

class Manage_File_Model extends CI_Model {

    public function saveFile($file) {
        // $path = dirname(__FILE__) .'\\files\\';
        $path = '..\\frontend\\client\\src\\assets\\temp-upload-file\\';
        $path_temp = '..\\..\\assets\\temp-upload-file\\';
        if (isset($file) && is_writable($path) && move_uploaded_file($file['tmp_name'], $path.md5($file['tmp_name']).'.'.pathinfo($file['name'], PATHINFO_EXTENSION))) {
            return array('status' => true, 'file_path' => $path_temp.md5($file['tmp_name']).'.'.pathinfo($file['name'], PATHINFO_EXTENSION));
        } else {
            return array('status' => false);
        }
    }

}