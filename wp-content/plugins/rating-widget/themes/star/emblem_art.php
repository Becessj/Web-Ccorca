<?php
    $theme_options = new stdClass();
    $theme_options->type = "star";
    $theme_options->style = "emblem_art";
    $theme_options->advanced = new stdClass();
    $theme_options->advanced->font = new stdClass();
    $theme_options->advanced->font->color = "#000000";
    $theme_options->advanced->font->hover = new stdClass();
    $theme_options->advanced->font->hover->color = "#000";

    $theme = array(
        "name" => "star_emblem_art",
        "title" => "Emblem Art",
        "options" => $theme_options
    );
?>
