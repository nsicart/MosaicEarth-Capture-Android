cmake_minimum_required(VERSION 3.22.1)
project(mosaicearth_photogrammetry LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

find_package(OpenCV REQUIRED COMPONENTS java)
find_library(log-lib log)
find_library(android-lib android)

add_library(
    mosaicearth_photogrammetry
    SHARED
    jni_photogrammetry.cpp
    core/features.cpp
    core/geometry.cpp
    core/ba.cpp
    core/dense.cpp
    core/io.cpp
    core/geomatics.cpp
    core/meshing.cpp
    core/sfm.cpp
)

target_include_directories(
    mosaicearth_photogrammetry
    PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${CMAKE_CURRENT_SOURCE_DIR}/core
)

target_compile_options(
    mosaicearth_photogrammetry
    PRIVATE
    -O3
    -ffunction-sections
    -fdata-sections
    -fvisibility=hidden
)

# 16 KB page alignment for Android 15+ devices
target_link_options(
    mosaicearth_photogrammetry
    PRIVATE
    "-Wl,-z,max-page-size=16384"
    "-Wl,--gc-sections"
)

target_link_libraries(
    mosaicearth_photogrammetry
    PRIVATE
    OpenCV::opencv_java4
    ${log-lib}
    ${android-lib}
)
