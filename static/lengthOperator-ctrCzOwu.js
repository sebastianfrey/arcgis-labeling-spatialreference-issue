import{hS as i}from"./index-BFudLC3v.js";import{fromGeometryToGXGeometry as a,getSpatialReference as c}from"./jsonConverter-CFjiQEq2.js";import"./Transformation2D-DUa_jsnY.js";import"./ProjectionTransformation-L8tGGcIU.js";import"./SimpleGeometryCursor-B92kdZ15.js";function l(t,m={}){const{unit:o}=m;let e=a(t).calculateLength2D();const r=c(t);return e&&o&&r&&(e=i(e,r,o)),e}export{l as execute};
