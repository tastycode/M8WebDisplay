// Copyright 2021 James Deery
// Released under the MIT licence, https://opensource.org/licenses/MIT

#version 300 es
precision highp float;

uniform vec3 colour;

out vec4 fragColour;

void main() {
    fragColour = vec4(colour, 1.0);
}
