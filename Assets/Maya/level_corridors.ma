//Maya ASCII 2011 scene
//Name: level_corridors.ma
//Last modified: Tue, Mar 01, 2011 02:05:49 AM
//Codeset: 1252
requires maya "2011";
requires "Mayatomr" "2011.0m - 3.8.1.26 ";
requires "stereoCamera" "10.0";
currentUnit -l centimeter -a degree -t film;
fileInfo "application" "maya";
fileInfo "product" "Maya 2011";
fileInfo "version" "2011 x64";
fileInfo "cutIdentifier" "201003190311-771506";
fileInfo "osv" "Microsoft Windows 7 Ultimate Edition, 64-bit Windows 7  (Build 7600)\n";
createNode transform -s -n "persp";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 30.075250442271745 7.0977789676050849 1.5103011878837598 ;
	setAttr ".r" -type "double3" -36.93835271988862 -3134.2000000004382 0 ;
createNode camera -s -n "perspShape" -p "persp";
	setAttr -k off ".v" no;
	setAttr ".fl" 34.999999999999993;
	setAttr ".coi" 14.793535599562587;
	setAttr ".imn" -type "string" "persp";
	setAttr ".den" -type "string" "persp_depth";
	setAttr ".man" -type "string" "persp_mask";
	setAttr ".hc" -type "string" "viewSet -p %camera";
createNode transform -s -n "top";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 14.10227554231037 100.10856208383989 3.1556614810610939 ;
	setAttr ".r" -type "double3" -89.999999999999986 0 0 ;
createNode camera -s -n "topShape" -p "top";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 80.60111132515361;
	setAttr ".imn" -type "string" "top";
	setAttr ".den" -type "string" "top_depth";
	setAttr ".man" -type "string" "top_mask";
	setAttr ".hc" -type "string" "viewSet -t %camera";
	setAttr ".o" yes;
createNode transform -s -n "front";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 0 0 100.1 ;
createNode camera -s -n "frontShape" -p "front";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "front";
	setAttr ".den" -type "string" "front_depth";
	setAttr ".man" -type "string" "front_mask";
	setAttr ".hc" -type "string" "viewSet -f %camera";
	setAttr ".o" yes;
createNode transform -s -n "side";
	setAttr ".v" no;
	setAttr ".t" -type "double3" 100.1 0 0 ;
	setAttr ".r" -type "double3" 0 89.999999999999986 0 ;
createNode camera -s -n "sideShape" -p "side";
	setAttr -k off ".v" no;
	setAttr ".rnd" no;
	setAttr ".coi" 100.1;
	setAttr ".ow" 30;
	setAttr ".imn" -type "string" "side";
	setAttr ".den" -type "string" "side_depth";
	setAttr ".man" -type "string" "side_mask";
	setAttr ".hc" -type "string" "viewSet -s %camera";
	setAttr ".o" yes;
createNode transform -n "polySurface37";
createNode transform -n "polySurface38" -p "polySurface37";
createNode mesh -n "polySurfaceShape56" -p "polySurface38";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 7 "f[0]" "f[1]" "f[5]" "f[13]" "f[15]" "f[16]" "f[17]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 13 "f[2]" "f[4]" "f[6]" "f[7]" "f[8]" "f[9]" "f[11]" "f[12]" "f[18]" "f[19]" "f[20]" "f[21]" "f[22]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 3 "f[3]" "f[10]" "f[14]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 58 ".uvst[0].uvsp[0:57]" -type "float2" 0.375 0.14957429 
		0.375 0.18236008 0.625 0.18236008 0.625 0.14957429 0.375 0.25 0.375 0.3267175 0.625 
		0.3267175 0.625 0.25 -0.83333337 0.79999995 -0.83333337 0.5999999 -0.5 0.5999999 
		-0.5 0.79999995 -5.5 -2.5 -5.5 -2 -4 -2 -4 -2.5 1.0999999 0.5999999 1.0999999 0.79999995 
		0.99999988 0.79999995 0.99999988 0.5999999 0.375 0 0.625 0 1.0999999 -5.9604645e-008 
		0.99999988 -5.9604645e-008 -0.83333337 -5.9604645e-008 -0.5 -5.9604645e-008 -0.19999999 
		0.5999999 -0.19999999 0.79999995 -0.59999996 0.79999995 -0.59999996 0.5999999 -0.19999999 
		-5.9604645e-008 -0.59999996 -5.9604645e-008 -5.5 -5 -5.5 -3 -4 -3 -4 -5 1.5999999 
		-5.9604645e-008 1.5999999 0.5999999 1.1999998 0.5999999 1.1999998 -5.9604645e-008 
		1.5999999 0.79999995 1.1999998 0.79999995 0.625 0.41554222 0.375 0.41554222 0.375 
		0.5 0.625 0.5 0 0 1 0 1 1 0 1 -0.19999999 0.99999988 -0.59999996 0.99999988 -0.83333337 
		0.99999988 -0.5 0.99999988 1.5999999 0.99999988 1.1999998 0.99999988 1.0999999 0.99999988 
		0.99999988 0.99999988;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 32 ".vt[0:31]"  -3 -1 0 0 -1 0 -3 4 0 0 4 0 -3 4 -6 0 4 
		-6 -3 -1 -6 0 -1 -6 0 2 -6 0 2 0 -3 2 0 -3 2 -6 0 4 -2 0 2 -2 0 -1 -2 -3 -1 -2 -3 
		2 -2 -3 4 -2 0 -1 -1 -3 -1 -1 -3 2 -1 -3 4 -1 0 4 -1 -3 2 -1 -3 2 -2 -3 3 0 0 3 0 
		0 3 -2 0 3 -6 -3 3 -6 -3 3 -2 -3 3 -1;
	setAttr -s 56 ".ed[0:55]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 10 0 1 9 0 
		2 21 0 3 22 0 4 29 0 5 28 0 
		6 15 0 7 14 0 8 7 0 9 26 0 
		8 13 1 10 25 0 9 10 1 11 6 0 
		10 20 1 11 8 1 12 5 0 12 27 0 
		14 18 0 13 14 0 15 19 0 14 15 1 
		16 11 1 15 16 0 17 4 0 16 30 0 
		17 12 1 18 1 0 19 0 0 18 19 1 
		20 16 0 19 20 0 21 17 0 20 31 0 
		22 12 0 21 22 1 20 23 0 16 24 0 
		23 24 0 25 2 0 26 3 0 25 26 1 
		27 13 0 28 8 0 27 28 1 29 11 0 
		28 29 1 30 17 1 29 30 1 31 21 1 
		30 31 0 31 25 1;
	setAttr -s 23 ".fc[0:22]" -type "polyFaces" 
		f 4 15 45 -14 16 
		mu 0 4 0 1 2 3 
		f 4 6 39 -8 -2 
		mu 0 4 4 5 6 7 
		f 4 49 19 -48 50 
		mu 0 4 8 9 10 11 
		f 4 32 0 -32 33 
		mu 0 4 12 13 14 15 
		f 4 37 55 -16 18 
		mu 0 4 16 17 18 19 
		f 4 4 -17 -6 -1 
		mu 0 4 20 0 3 21 
		f 4 35 -19 -5 -33 
		mu 0 4 22 16 19 23 
		f 4 -20 17 3 -13 
		mu 0 4 10 9 24 25 
		f 4 -47 48 47 14 
		mu 0 4 26 27 28 29 
		f 4 -24 -15 12 11 
		mu 0 4 30 26 29 31 
		f 4 10 -26 -12 -4 
		mu 0 4 32 33 34 35 
		f 4 -18 -27 -28 -11 
		mu 0 4 36 37 38 39 
		f 4 -50 52 -30 26 
		mu 0 4 37 40 41 38 
		f 4 -31 28 2 -21 
		mu 0 4 42 43 44 45 
		f 4 24 -34 -23 25 
		mu 0 4 33 12 15 34 
		f 4 -40 36 30 -39 
		mu 0 4 6 5 43 42 
		f 4 -35 40 42 -42 
		mu 0 4 46 47 48 49 
		f 4 43 1 -45 -46 
		mu 0 4 1 4 7 2 
		f 4 -49 -22 20 9 
		mu 0 4 28 27 50 51 
		f 4 8 -51 -10 -3 
		mu 0 4 52 8 11 53 
		f 4 -53 -9 -29 -52 
		mu 0 4 41 40 54 55 
		f 4 -55 51 -37 -54 
		mu 0 4 17 41 55 56 
		f 4 -56 53 -7 -44 
		mu 0 4 18 17 56 57 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface39" -p "polySurface37";
createNode mesh -n "polySurfaceShape57" -p "polySurface39";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 19 "f[0]" "f[1]" "f[5]" "f[6]" "f[7]" "f[8]" "f[9]" "f[10]" "f[11]" "f[12]" "f[13]" "f[14]" "f[15]" "f[16]" "f[17]" "f[18]" "f[19]" "f[20]" "f[21]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 1 "f[3]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 2 "f[2]" "f[4]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 54 ".uvst[0].uvsp[0:53]" -type "float2" 0.375 0 0.375 0.25 
		0.625 0.25 0.625 0 0.625 0.38112509 0.375 0.38112509 -4 -2.2622502 -4 -2 -2.5 -2 
		-2.5 -2.2622502 -0.16666666 1.1999998 -0.16666666 1.1999998 -0.5 0.99999988 -0.5 
		0.99999988 -0.5 -5.9604645e-008 -0.16666666 0.19999993 -4 -3 -2.5 -3 0.375 0 0.625 
		0 0.625 0.25 0.375 0.25 0.625 0.38112509 0.375 0.38112509 0.375 0.86887491 0.625 
		0.86887491 0.625 1 0.375 1 0.625 0.5 0.625 0.75 0.375 0.75 0.375 0.5 0.375 0 0.375 
		0.25 0.625 0.25 0.625 0 0.625 0.38112509 0.375 0.38112509 0.375 0.86887491 0.375 
		1 0.375 1 0.375 0.86887491 0.625 1 0.625 0.86887491 0.625 0.86887491 0.625 1 0.625 
		0.5 0.625 0.5 0.375 0.5 0.375 0.5 0.375 0.75 0.375 0.75 0.625 0.75 0.625 0.75;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 24 ".vt[0:23]"  0 -1 0 3 0 0 0 4 0 3 5 0 0 4 -2 3 5 -2 0 
		-1 -2 3 0 -2 3 5 -2 0 4 -2 0 -1 -0.52450037 3 0 -0.52450037 0 -1 0 0 4 0 3 5 0 3 
		0 0 3 5 -2 0 4 -2 0 -1 -0.52450037 3 0 -0.52450037 3 5 -2 0 4 -2 0 -1 -2 3 0 -2;
	setAttr -s 46 ".ed[0:45]"  0 1 0 2 3 0 
		6 7 0 0 2 0 1 3 0 2 9 0 
		3 8 0 4 6 0 5 7 0 6 10 0 
		7 11 0 8 5 0 9 4 0 8 9 0 
		10 0 0 11 1 0 10 11 1 0 12 0 
		2 13 0 12 13 0 3 14 0 13 14 0 
		1 15 0 15 14 0 12 15 0 8 16 0 
		14 16 0 9 17 0 13 17 0 16 17 0 
		10 18 0 18 12 0 11 19 0 19 15 0 
		18 19 1 5 20 0 16 20 0 4 21 0 
		17 21 0 6 22 0 21 22 0 7 23 0 
		22 23 0 20 23 0 22 18 0 23 19 0;
	setAttr -s 22 ".fc[0:21]" -type "polyFaces" 
		f 4 19 21 -24 -25 
		mu 0 4 0 1 2 3 
		f 4 -27 -22 28 -30 
		mu 0 4 4 2 1 5 
		f 4 31 24 -34 -35 
		mu 0 4 6 7 8 9 
		f 6 -37 29 38 40 42 -44 
		mu 0 6 10 11 12 13 14 15 
		f 4 44 34 -46 -43 
		mu 0 4 16 6 9 17 
		f 4 0 4 -2 -4 
		mu 0 4 18 19 20 21 
		f 4 13 -6 1 6 
		mu 0 4 22 23 21 20 
		f 4 16 15 -1 -15 
		mu 0 4 24 25 26 27 
		f 6 8 -3 -8 -13 -14 11 
		mu 0 6 28 29 30 31 23 22 
		f 4 2 10 -17 -10 
		mu 0 4 30 29 25 24 
		f 4 3 18 -20 -18 
		mu 0 4 32 33 1 0 
		f 4 -5 22 23 -21 
		mu 0 4 34 35 3 2 
		f 4 -7 20 26 -26 
		mu 0 4 36 34 2 4 
		f 4 5 27 -29 -19 
		mu 0 4 33 37 5 1 
		f 4 14 17 -32 -31 
		mu 0 4 38 39 40 41 
		f 4 -16 32 33 -23 
		mu 0 4 42 43 44 45 
		f 4 -12 25 36 -36 
		mu 0 4 46 36 4 47 
		f 4 12 37 -39 -28 
		mu 0 4 37 48 49 5 
		f 4 7 39 -41 -38 
		mu 0 4 48 50 51 49 
		f 4 -9 35 43 -42 
		mu 0 4 52 46 47 53 
		f 4 9 30 -45 -40 
		mu 0 4 50 38 41 51 
		f 4 -11 41 45 -33 
		mu 0 4 43 52 53 44 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface40" -p "polySurface37";
createNode mesh -n "polySurfaceShape58" -p "polySurface40";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 18 "f[0]" "f[1]" "f[7]" "f[8]" "f[18]" "f[19]" "f[30]" "f[31]" "f[32]" "f[33]" "f[34]" "f[35]" "f[36]" "f[37]" "f[38]" "f[39]" "f[40]" "f[41]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 20 "f[2]" "f[4]" "f[5]" "f[6]" "f[9]" "f[10]" "f[12]" "f[13]" "f[16]" "f[17]" "f[20]" "f[21]" "f[22]" "f[23]" "f[24]" "f[25]" "f[26]" "f[27]" "f[28]" "f[29]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 4 "f[3]" "f[11]" "f[14]" "f[15]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 110 ".uvst[0].uvsp[0:109]" -type "float2" 0.375 0.13369484 
		0.375 0.25 0.57545424 0.25 0.57545424 0.13369484 0.375 0.37485749 0.57545424 0.37485749 
		-0.16666666 1.1999998 -0.16666666 0.73581338 0.16666669 0.73581338 0.16666669 1.1999998 
		-2.5 -3 -2.5 -2 -1 -2 -1 -3 -2.9802322e-008 0.73581338 -2.9802322e-008 1.1999998 
		-0.20000002 1.1999998 -0.20000002 0.73581338 -0.16666666 0.51583445 0.16666669 0.51583445 
		-2.9802322e-008 0.51583445 -0.20000002 0.51583445 0.375 0 0.57545424 0 0.375 0.5 
		0.57545424 0.5 -0.40000001 1.1999998 -0.40000001 0.73581338 -0.40000001 0.51583445 
		-2.5 -4 -1 -4 1.3999999 0.51583445 1.3999999 0.73581338 1.1999998 0.73581338 1.1999998 
		0.51583445 1.1999998 1.1999998 1.3999999 1.1999998 0 -2 0 -3 0 -4 0.3888889 0.51583445 
		0.3888889 0.73581338 0.3888889 1.1999998 0.625 0.5 0.625 0.37485749 0.625 0.25 1.3962952 
		0.47327888 1.3962952 0.51583445 1.1999998 0.51583445 1.1999998 0.47327888 0.16666669 
		0.51583445 -0.16255039 0.51583445 -0.16255045 0.47327888 0.16666669 0.47327888 0.3847726 
		0.51583445 0.3847726 0.47327888 -0.20000002 0.47327888 -0.20000002 0.51583445 -0.39629537 
		0.51583445 -0.39629537 0.47327888 -2.9802322e-008 0.47327888 -2.9802322e-008 0.51583445 
		1.3999999 0.19999993 1.3999999 0.47327888 1.1999998 0.47327888 1.1999998 0.19999993 
		0.16666669 0.47327888 -0.16666669 0.47327888 -0.16666666 0.19999993 0.16666669 0.19999993 
		0.3888889 0.47327888 0.3888889 0.19999993 -0.20000002 0.19999993 -0.20000002 0.47327888 
		-0.40000001 0.47327888 -0.40000001 0.19999993 -2.9802322e-008 0.19999993 -2.9802322e-008 
		0.47327888 0.125 0.078806251 0.25014251 0.078806251 0.25014251 0.078806251 0.125 
		0.078806251 0.25014251 0.0681879 0.25014251 0.0681879 0.125 0.0681879 0.125 0.0681879 
		0.57545424 0.67119372 0.375 0.67119372 0.375 0.67119372 0.57545424 0.67119372 0.37499997 
		0.68181205 0.57545424 0.68181205 0.57545424 0.68181205 0.37499997 0.68181205 0.625 
		0.67119372 0.625 0.67119372 0.625 0.68181205 0.625 0.68181205 0.74985749 0.078806251 
		0.875 0.078806251 0.875 0.078806251 0.74985749 0.078806251 0.875 0.0681879 0.74985749 
		0.0681879 0.74985749 0.0681879 0.875 0.0681879 0.625 0.0681879 0.625 0.078806251 
		0.625 0.078806251 0.625 0.0681879;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 50 ".vt[0:49]"  3 0 0 8 0 0 3 5 0 8 5 0 3 5 -4 8 5 -4 3 
		0 -4 8 0 -4 3 2.6790671 -4 8 2.6790671 -4 8 2.6790671 0 3 2.6790671 0 3 5 -2 8 5 
		-2 8 2.6790671 -2 8 0 -2 3 0 -2 3 2.6790671 -2 6 5 0 6 2.6790671 0 6 0 0 6 0 -2 6 
		0 -4 6 2.6790671 -4 6 5 -4 6 5 -2 3 1.5791726 -2 3 1.5791726 -4 6 1.5791726 -4 8 
		1.5791726 -4 8 1.5791726 -2 8 1.5791726 0 3 1.3663949 -2 2.9999998 1.3663949 -4 6 
		1.3663949 -4 8 1.3663949 -4 8 1.3663949 -2 8 1.3663949 0 3.0370464 1.5791726 -3.9629533 
		3.037046 1.3663949 -3.9629533 3.0740924 1.5791726 -2 3.0740924 1.3663949 -2 6 1.5791726 
		-3.9259069 6 1.3663949 -3.9259069 7.9629536 1.5791726 -3.9629536 7.9629536 1.3663949 
		-3.9629536 7.9259071 1.5791726 -2 7.9259071 1.3663949 -2 7.9259071 1.3663949 0 7.9259071 
		1.5791726 0;
	setAttr -s 92 ".ed[0:91]"  0 20 0 2 18 0 
		4 24 0 6 22 0 0 11 0 1 37 0 
		2 12 0 3 13 0 4 8 0 5 9 0 
		6 16 0 7 15 0 8 27 0 9 29 0 
		8 23 1 10 3 0 9 14 1 11 2 0 
		12 4 0 13 5 0 12 25 1 14 10 1 
		13 14 1 15 1 0 14 30 1 16 0 0 
		15 21 1 17 8 1 16 32 0 17 12 0 
		18 3 0 19 11 1 18 19 0 20 1 0 
		19 20 0 21 16 1 20 21 1 22 7 0 
		21 22 1 23 9 1 22 34 1 24 5 0 
		23 24 1 25 13 1 24 25 1 25 18 1 
		26 17 0 26 27 0 28 23 1 27 28 0 
		28 29 0 29 30 0 31 10 0 30 31 0 
		32 26 0 33 6 0 32 33 0 33 34 0 
		35 7 0 34 35 0 36 15 1 35 36 0 
		37 31 0 36 37 0 27 38 1 33 39 1 
		38 39 0 26 40 0 40 38 0 32 41 0 
		41 40 0 41 39 0 28 42 1 38 42 0 
		34 43 1 39 43 0 43 42 1 29 44 1 
		42 44 0 35 45 1 43 45 0 44 45 0 
		30 46 1 36 47 1 46 47 1 44 46 0 
		45 47 0 37 48 0 31 49 0 48 49 0 
		46 49 0 47 48 0;
	setAttr -s 42 ".fc[0:41]" -type "polyFaces" 
		f 4 17 1 32 31 
		mu 0 4 0 1 2 3 
		f 4 6 20 45 -2 
		mu 0 4 1 4 5 2 
		f 4 8 14 42 -3 
		mu 0 4 6 7 8 9 
		f 4 25 0 36 35 
		mu 0 4 10 11 12 13 
		f 4 15 7 22 21 
		mu 0 4 14 15 16 17 
		f 4 12 49 48 -15 
		mu 0 4 7 18 19 8 
		f 4 52 -22 24 53 
		mu 0 4 20 14 17 21 
		f 4 4 -32 34 -1 
		mu 0 4 22 0 3 23 
		f 4 18 2 44 -21 
		mu 0 4 4 24 25 5 
		f 4 -23 19 9 16 
		mu 0 4 17 16 26 27 
		f 4 -25 -17 13 51 
		mu 0 4 21 17 27 28 
		f 4 10 -36 38 -4 
		mu 0 4 29 10 13 30 
		f 4 -13 -28 -47 47 
		mu 0 4 31 32 33 34 
		f 4 -30 27 -9 -19 
		mu 0 4 35 33 32 36 
		f 4 -37 33 -24 26 
		mu 0 4 13 12 37 38 
		f 4 -39 -27 -12 -38 
		mu 0 4 30 13 38 39 
		f 4 -49 50 -14 -40 
		mu 0 4 8 19 40 41 
		f 4 -43 39 -10 -42 
		mu 0 4 9 8 41 42 
		f 4 -45 41 -20 -44 
		mu 0 4 5 25 43 44 
		f 4 -46 43 -8 -31 
		mu 0 4 2 5 44 45 
		f 4 -67 -69 -71 71 
		mu 0 4 46 47 48 49 
		f 4 -74 66 75 76 
		mu 0 4 50 51 52 53 
		f 4 -79 -77 80 -82 
		mu 0 4 54 50 53 55 
		f 4 -85 -86 81 86 
		mu 0 4 56 57 58 59 
		f 4 89 -91 84 91 
		mu 0 4 60 61 57 56 
		f 4 -56 -57 -29 -11 
		mu 0 4 62 63 64 65 
		f 4 -58 55 3 40 
		mu 0 4 66 67 68 69 
		f 4 -60 -41 37 -59 
		mu 0 4 70 66 69 71 
		f 4 -61 -62 58 11 
		mu 0 4 72 73 74 75 
		f 4 5 -64 60 23 
		mu 0 4 76 77 73 72 
		f 4 -48 67 68 -65 
		mu 0 4 78 79 80 81 
		f 4 -55 69 70 -68 
		mu 0 4 79 82 83 80 
		f 4 56 65 -72 -70 
		mu 0 4 82 84 85 83 
		f 4 -50 64 73 -73 
		mu 0 4 86 87 88 89 
		f 4 57 74 -76 -66 
		mu 0 4 90 91 92 93 
		f 4 -51 72 78 -78 
		mu 0 4 94 86 89 95 
		f 4 59 79 -81 -75 
		mu 0 4 91 96 97 92 
		f 4 -52 77 85 -83 
		mu 0 4 98 99 100 101 
		f 4 61 83 -87 -80 
		mu 0 4 102 103 104 105 
		f 4 62 88 -90 -88 
		mu 0 4 106 107 108 109 
		f 4 -54 82 90 -89 
		mu 0 4 107 98 101 108 
		f 4 63 87 -92 -84 
		mu 0 4 103 106 109 104 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface41" -p "polySurface37";
createNode mesh -n "polySurfaceShape59" -p "polySurface41";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 4 "f[0]" "f[1]" "f[7]" "f[10]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 4 "f[3]" "f[4]" "f[6]" "f[9]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 3 "f[2]" "f[5]" "f[8]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 32 ".uvst[0].uvsp[0:31]" -type "float2" 0.375 0 0.375 0.25 
		0.625 0.25 0.625 0 0.375 0.33347684 0.625 0.33347684 -1 -0.00086092949 -1 1 0 1 0 
		-0.00086092949 0.5999999 0.19999993 0.5999999 1.1999998 0.39982772 1.1999998 0.39982772 
		0.19999993 0.19999993 0.19999993 0.19999993 1.1999998 -2.9802322e-008 1.1999998 -2.9802322e-008 
		0.19999993 -1 -2 -1 -1 0 -1 0 -2 0.99999988 0.19999993 0.99999988 1.1999998 0.79999995 
		1.1999998 0.79999995 0.19999993 0.625 0.41664338 0.375 0.41664338 0.375 0.5 0.625 
		0.5 0.60017204 1.1999998 0.60017204 0.19999993;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 16 ".vt[0:15]"  6 0 6 8 0 6 6 5 6 8 5 6 6 5 0 8 5 0 6 0 
		0 8 0 0 8 5 2 8 0 2 6 0 2 6 5 2 8 5 3.9982781 8 0 3.9982781 6 0 3.9982781 6 5 3.9982781;
	setAttr -s 28 ".ed[0:27]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 15 0 3 12 0 4 6 0 5 7 0 
		6 10 0 7 9 0 8 5 0 9 13 0 
		8 9 0 10 14 0 9 10 1 11 4 0 
		10 11 1 11 8 1 12 8 0 13 1 0 
		12 13 0 14 0 0 13 14 1 15 11 0 
		14 15 0 15 12 1;
	setAttr -s 11 ".fc[0:10]" -type "polyFaces" 
		f 4 4 1 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 6 27 -8 -2 
		mu 0 4 1 4 5 2 
		f 4 23 0 -22 24 
		mu 0 4 6 7 8 9 
		f 4 5 7 22 21 
		mu 0 4 10 11 12 13 
		f 4 -15 12 9 11 
		mu 0 4 14 15 16 17 
		f 4 10 -17 -12 -4 
		mu 0 4 18 19 20 21 
		f 4 -9 -18 -19 -11 
		mu 0 4 22 23 24 25 
		f 4 -20 17 2 -13 
		mu 0 4 26 27 28 29 
		f 4 15 -25 -14 16 
		mu 0 4 19 6 9 20 
		f 4 18 -26 -27 -16 
		mu 0 4 25 24 30 31 
		f 4 -28 25 19 -21 
		mu 0 4 5 4 27 26 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface42" -p "polySurface37";
createNode mesh -n "polySurfaceShape60" -p "polySurface42";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 5 "f[0]" "f[1]" "f[6]" "f[9]" "f[12]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 5 "f[2]" "f[4]" "f[5]" "f[7]" "f[10]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 4 "f[3]" "f[8]" "f[11]" "f[13]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 40 ".uvst[0].uvsp[0:39]" -type "float2" 0.375 0 0.375 0.25 
		0.625 0.25 0.625 0 0.375 0.43752605 0.375 0.5 0.625 0.5 0.625 0.43752605 -0.16666666 
		1.1999998 -0.16666666 0.19999993 0.16666669 0.19999993 0.16666669 1.1999998 -2.5 
		0 -2.5 0.5 -1 0.5 -1 0 0.5999999 0.19999993 0.5999999 1.1999998 0.49999988 1.1999998 
		0.49999988 0.19999993 0.79999995 0.19999993 0.79999995 1.1999998 0.69956195 1.1999998 
		0.69956195 0.19999993 0.375 0.31278241 0.625 0.31278241 0.30043787 0.19999993 0.30043787 
		1.1999998 0.19999993 1.1999998 0.19999993 0.19999993 -1 1.4978104 -2.5 1.4978104 
		-2.5 2 -1 2 0.375 0.3747724 0.625 0.3747724 0.5999999 1.1999998 0.5999999 0.19999993 
		-1 1 -2.5 1;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 20 ".vt[0:19]"  3 0 8 6 0 8 3 5 8 6 5 8 3 5 4 6 5 4 3 0 
		4 6 0 4 6 0 5 6 5 5 3 5 5 3 0 5 3 5 6.9956207 6 5 6.9956207 6 0 6.9956207 3 0 6.9956207 
		3 5 6 6 5 6 6 0 6 3 0 6;
	setAttr -s 34 ".ed[0:33]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 12 0 3 13 0 4 6 0 5 7 0 
		6 11 0 7 8 0 8 18 0 9 5 0 
		10 4 0 9 10 1 11 19 0 10 11 0 
		11 8 1 12 16 0 13 17 0 12 13 1 
		14 1 0 13 14 1 15 0 0 14 15 1 
		15 12 0 16 10 0 17 9 0 16 17 1 
		18 14 0 17 18 0 19 15 0 18 19 1;
	setAttr -s 14 ".fc[0:13]" -type "polyFaces" 
		f 4 4 1 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 14 2 -14 15 
		mu 0 4 4 5 6 7 
		f 4 8 3 -10 -3 
		mu 0 4 8 9 10 11 
		f 4 10 18 -12 -4 
		mu 0 4 12 13 14 15 
		f 4 -9 -15 17 -11 
		mu 0 4 16 17 18 19 
		f 4 5 7 23 22 
		mu 0 4 20 21 22 23 
		f 4 6 21 -8 -2 
		mu 0 4 1 24 25 2 
		f 4 26 -7 -5 -25 
		mu 0 4 26 27 28 29 
		f 4 25 24 0 -23 
		mu 0 4 30 31 32 33 
		f 4 19 29 -21 -22 
		mu 0 4 24 34 35 25 
		f 4 -24 20 31 30 
		mu 0 4 23 22 36 37 
		f 4 33 32 -26 -31 
		mu 0 4 38 39 31 30 
		f 4 27 -16 -29 -30 
		mu 0 4 34 4 7 35 
		f 4 -19 16 -34 -13 
		mu 0 4 14 13 39 38 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface43" -p "polySurface37";
createNode mesh -n "polySurfaceShape61" -p "polySurface43";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 7 "f[0]" "f[4]" "f[6]" "f[9]" "f[14]" "f[15]" "f[16]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 4 "f[1]" "f[3]" "f[8]" "f[13]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 6 "f[2]" "f[5]" "f[7]" "f[10]" "f[11]" "f[12]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 40 ".uvst[0].uvsp[0:39]" -type "float2" 0.375 0.25 0.375 
		0.40006912 0.45655924 0.40006912 0.45655924 0.25 0.5 1.1999998 0.5 0.19999993 0.72222221 
		0.19999993 0.72222221 1.1999998 0.5 0 0.5 1.5 1.5 1.5 1.5 0 0.5999999 0.19999993 
		0.5999999 1.1999998 0.29999995 1.1999998 0.29999995 0.19999993 0.375 0.45175135 0.45655924 
		0.45175135 0.5 -1 1.5 -1 0.375 0.5 0.45655924 0.5 0.5 -2.5 1.5 -2.5 1.0999999 0.19999993 
		1.0999999 1.1999998 0.79999995 1.1999998 0.79999995 0.19999993 0.45655924 0 0.625 
		0.25 0.625 0 2.5 1.5 2.5 0 2.5 -1 2.5 -2.5 0.94444442 0.19999993 0.94444442 1.1999998 
		0.625 0.5 0.625 0.45175135 0.625 0.40006912;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 24 ".vt[0:23]"  9 0 7 13 0 7 9 5 7 13 5 7 9 5 -1 13 5 -1 
		9 0 -1 13 0 -1 9 5 4 13 5 4 13 0 4 9 0 4 9 5 2 13 5 2 13 0 2 9 0 2 11 5 7 11 0 7 
		11 0 4 11 0 2 11 0 -1 11 5 -1 11 5 2 11 5 4;
	setAttr -s 42 ".ed[0:41]"  0 17 0 2 16 0 
		4 21 0 6 20 0 0 2 0 1 3 0 
		2 8 0 3 9 0 4 6 0 5 7 0 
		6 15 0 7 14 0 8 12 0 9 13 0 
		8 23 1 10 1 0 11 0 0 10 18 1 
		11 8 0 12 4 0 13 5 0 12 22 1 
		14 10 0 15 11 0 14 19 1 15 12 0 
		16 3 0 17 1 0 16 17 0 18 11 1 
		17 18 1 19 15 1 18 19 1 20 7 0 
		19 20 1 21 5 0 20 21 1 22 13 1 
		21 22 1 23 9 1 22 23 1 23 16 1;
	setAttr -s 17 ".fc[0:16]" -type "polyFaces" 
		f 4 6 14 41 -2 
		mu 0 4 0 1 2 3 
		f 4 8 3 36 -3 
		mu 0 4 4 5 6 7 
		f 4 16 0 30 29 
		mu 0 4 8 9 10 11 
		f 4 18 -7 -5 -17 
		mu 0 4 12 13 14 15 
		f 4 12 21 40 -15 
		mu 0 4 1 16 17 2 
		f 4 23 -30 32 31 
		mu 0 4 18 8 11 19 
		f 4 19 2 38 -22 
		mu 0 4 16 20 21 17 
		f 4 10 -32 34 -4 
		mu 0 4 22 18 19 23 
		f 4 -9 -20 -26 -11 
		mu 0 4 24 25 26 27 
		f 4 -29 26 -6 -28 
		mu 0 4 28 3 29 30 
		f 4 -31 27 -16 17 
		mu 0 4 11 10 31 32 
		f 4 -33 -18 -23 24 
		mu 0 4 19 11 32 33 
		f 4 -35 -25 -12 -34 
		mu 0 4 23 19 33 34 
		f 4 -37 33 -10 -36 
		mu 0 4 7 6 35 36 
		f 4 -39 35 -21 -38 
		mu 0 4 17 21 37 38 
		f 4 -41 37 -14 -40 
		mu 0 4 2 17 38 39 
		f 4 -42 39 -8 -27 
		mu 0 4 3 2 39 29 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface44" -p "polySurface37";
createNode mesh -n "polySurfaceShape62" -p "polySurface44";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 3 "f[0]" "f[1]" "f[3]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 1 "f[2]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 14 ".uvst[0].uvsp[0:13]" -type "float2" 0.375 0 0.375 0.25 
		0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 0.3888889 1.1999998 0.3888889 0.19999993 0.5 
		0.19999993 0.5 1.1999998 0.375 0.75 0.375 1 0.625 1 0.625 0.75;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  8 0 4 9 0 4 8 5 4 9 5 4 8 5 2 9 5 2 8 0 
		2 9 0 2;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 4 ".fc[0:3]" -type "polyFaces" 
		f 4 4 1 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 6 2 -8 -2 
		mu 0 4 1 4 5 2 
		f 4 8 3 -10 -3 
		mu 0 4 6 7 8 9 
		f 4 10 0 -12 -4 
		mu 0 4 10 11 12 13 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface45" -p "polySurface37";
createNode mesh -n "polySurfaceShape63" -p "polySurface45";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 2 "f[0]" "f[1]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 1 "f[2]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 1 "f[3]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 14 ".uvst[0].uvsp[0:13]" -type "float2" 0.375 0 0.375 0.25 
		0.625 0.25 0.625 0 0.375 0.5 0.625 0.5 -0.27777779 1.1999998 -0.27777779 0.19999993 
		-0.16666666 0.19999993 -0.16666666 1.1999998 -3 0.5 -3 1.5 -2.5 1.5 -2.5 0.5;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  2 0 7 3 0 7 2 5 7 3 5 7 2 5 5 3 5 5 2 0 
		5 3 0 5;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 4 ".fc[0:3]" -type "polyFaces" 
		f 4 4 1 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 6 2 -8 -2 
		mu 0 4 1 4 5 2 
		f 4 8 3 -10 -3 
		mu 0 4 6 7 8 9 
		f 4 10 0 -12 -4 
		mu 0 4 10 11 12 13 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface46" -p "polySurface37";
createNode mesh -n "polySurfaceShape64" -p "polySurface46";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 9 "f[0]" "f[1]" "f[7]" "f[8]" "f[11]" "f[17]" "f[18]" "f[19]" "f[20]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 11 "f[2]" "f[4]" "f[6]" "f[10]" "f[12]" "f[16]" "f[21]" "f[22]" "f[23]" "f[24]" "f[25]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 6 "f[3]" "f[5]" "f[9]" "f[13]" "f[14]" "f[15]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 56 ".uvst[0].uvsp[0:55]" -type "float2" 0.375 0.19954404 
		0.375 0.25 0.49916631 0.25 0.49916631 0.19954404 0.375 0.41740009 0.49916631 0.41740009 
		-0.94444442 1.1999998 -0.94444442 0.99999988 -0.6111111 0.99999988 -0.6111111 1.1999998 
		-6 0.5 -6 1.5 -4.5 1.5 -4.5 0.5 0.49999988 0.99999988 0.49999988 1.1999998 0.29999995 
		1.1999998 0.29999995 0.99999988 -3.5 1.5 -3.5 0.5 -0.3888889 0.99999988 -0.3888889 
		1.1999998 0.58309048 0.41740009 0.58309048 0.25 0.58309048 0 0.625 0.25 0.625 0 -3 
		1.5 -3 0.5 -0.27777779 0.99999988 -0.27777779 1.1999998 0.625 0.41740009 0.5 0.99999988 
		0.5 1.1999998 0.39999998 1.1999998 0.39999998 0.99999988 -3.5 0 -3 0 -4.5 0 -6 0 
		0.5999999 0.99999988 0.5999999 1.1999998 0.375 0.5 0.49916631 0.5 0.58309048 0.5 
		0.625 0.5 0.375 0 0.49916631 0 0.49999988 0.19999993 0.29999995 0.19999993 -0.94444442 
		0.19999993 -0.6111111 0.19999993 -0.3888889 0.19999993 -0.27777779 0.19999993 0.5 
		0.19999993 0.39999998 0.19999993;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 32 ".vt[0:31]"  -4 0 7 2 0 7 -4 5 7 2 5 7 -4 5 4 2 5 4 -4 
		0 4 2 0 4 -1 5 7 -1 0 7 -1 0 4 -1 5 4 1 5 7 1 0 7 1 0 4 1 5 4 2 5 5 2 0 5 1 0 5 -1 
		0 5 -4 0 5 -4 5 5 -1 5 5 1 5 5 -1 4 7 -4 4 7 -4 4 5 -4 4 4 -1 4 4 1 4 4 2 4 4 2 4 
		5;
	setAttr -s 59 ".ed[0:58]"  0 9 0 2 8 0 
		4 11 0 6 10 0 0 25 0 1 3 0 
		2 21 0 3 16 0 4 27 0 5 30 0 
		6 20 0 7 17 0 8 12 0 9 13 0 
		8 24 0 10 14 0 9 19 1 11 15 0 
		10 28 1 11 22 1 12 3 0 13 1 0 
		12 13 0 14 7 0 13 18 1 15 5 0 
		14 29 1 15 23 1 16 5 0 17 1 0 
		16 31 0 18 14 1 17 18 1 19 10 1 
		18 19 1 20 0 0 19 20 1 21 4 0 
		20 26 0 22 8 1 21 22 1 23 12 1 
		22 23 1 23 16 1 24 9 0 25 2 0 
		24 25 1 26 21 1 25 26 1 27 6 0 
		26 27 0 28 11 1 27 28 1 29 15 1 
		28 29 1 30 7 0 29 30 1 31 17 0 
		30 31 1;
	setAttr -s 26 ".fc[0:25]" -type "polyFaces" 
		f 4 45 1 14 46 
		mu 0 4 0 1 2 3 
		f 4 6 40 39 -2 
		mu 0 4 1 4 5 2 
		f 4 8 52 51 -3 
		mu 0 4 6 7 8 9 
		f 4 35 0 16 36 
		mu 0 4 10 11 12 13 
		f 4 47 -7 -46 48 
		mu 0 4 14 15 16 17 
		f 4 -17 13 24 34 
		mu 0 4 13 12 18 19 
		f 4 -52 54 53 -18 
		mu 0 4 9 8 20 21 
		f 4 -40 42 41 -13 
		mu 0 4 2 5 22 23 
		f 4 -23 20 -6 -22 
		mu 0 4 24 23 25 26 
		f 4 -25 21 -30 32 
		mu 0 4 19 18 27 28 
		f 4 -54 56 -10 -26 
		mu 0 4 21 20 29 30 
		f 4 -42 43 -8 -21 
		mu 0 4 23 22 31 25 
		f 4 -31 28 9 58 
		mu 0 4 32 33 34 35 
		f 4 -32 -33 -12 -24 
		mu 0 4 36 19 28 37 
		f 4 -34 -35 31 -16 
		mu 0 4 38 13 19 36 
		f 4 10 -37 33 -4 
		mu 0 4 39 10 13 38 
		f 4 -9 -38 -48 50 
		mu 0 4 40 41 15 14 
		f 4 -41 37 2 19 
		mu 0 4 5 4 42 43 
		f 4 -43 -20 17 27 
		mu 0 4 22 5 43 44 
		f 4 -44 -28 25 -29 
		mu 0 4 31 22 44 45 
		f 4 4 -47 44 -1 
		mu 0 4 46 0 3 47 
		f 4 38 -49 -5 -36 
		mu 0 4 48 14 17 49 
		f 4 -53 49 3 18 
		mu 0 4 8 7 50 51 
		f 4 -55 -19 15 26 
		mu 0 4 20 8 51 52 
		f 4 -57 -27 23 -56 
		mu 0 4 29 20 52 53 
		f 4 -58 -59 55 11 
		mu 0 4 54 32 35 55 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface47" -p "polySurface37";
createNode mesh -n "polySurfaceShape65" -p "polySurface47";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 1 "f[0]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 2 "f[2]" "f[3]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 1 "f[1]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 16 ".uvst[0].uvsp[0:15]" -type "float2" 0.375 0.25 0.375 
		0.5 0.625 0.5 0.625 0.25 -4.5 1.5 -4.5 2.5 -3.5 2.5 -3.5 1.5 0.89999998 0.19999993 
		0.89999998 1.1999998 0.69999993 1.1999998 0.69999993 0.19999993 0.29999995 0.19999993 
		0.29999995 1.1999998 0.099999905 1.1999998 0.099999905 0.19999993;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  -1 0 9 1 0 9 -1 5 9 1 5 9 -1 5 7 1 5 7 -1 
		0 7 1 0 7;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 4 ".fc[0:3]" -type "polyFaces" 
		f 4 6 2 -8 -2 
		mu 0 4 0 1 2 3 
		f 4 10 0 -12 -4 
		mu 0 4 4 5 6 7 
		f 4 5 7 9 11 
		mu 0 4 8 9 10 11 
		f 4 -9 -7 -5 -11 
		mu 0 4 12 13 14 15 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface48" -p "polySurface37";
createNode mesh -n "polySurfaceShape66" -p "polySurface48";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 10 "f[0]" "f[1]" "f[6]" "f[9]" "f[10]" "f[11]" "f[12]" "f[15]" "f[16]" "f[17]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 6 "f[2]" "f[4]" "f[5]" "f[7]" "f[13]" "f[18]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 4 "f[3]" "f[8]" "f[14]" "f[19]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 51 ".uvst[0].uvsp[0:50]" -type "float2" 0.375 0 0.375 0.25 
		0.625 0.25 0.625 0 0.375 0.3121931 0.375 0.5 0.625 0.5 0.625 0.3121931 -1.1666667 
		0.79999995 -1.1666667 -5.9604645e-008 -0.94444442 -5.9604645e-008 -0.94444442 0.79999995 
		-7 -2.5 -7 0 -6 0 -6 -2.5 0.39999998 0.19999993 0.39999998 0.99999988 -0.099999994 
		0.79999995 -0.099999994 -5.9604645e-008 1.0999999 -5.9604645e-008 1.0999999 0.79999995 
		0.5999999 0.99999988 0.5999999 0.19999993 0.49999988 0.99999988 0.49999988 0.19999993 
		-7 0.5 -6 0.5 0.375 0.75 0.375 0.75 0.375 0.5 0.625 0.75 0.625 0.75 0.625 0.5 1.0999999 
		0.79999995 1.0999999 -5.9604645e-008 1.1999998 -5.9604645e-008 1.1999998 0.79999995 
		-7 -2.5 -6 -2.5 -6 -3 -7 -3 0.375 0.5 0.625 0.5 0.625 0.5 0.625 0.75 0.625 0.5 -0.83333337 
		-5.9604645e-008 -0.83333337 0.79999995 -5.5 -2.5 -5.5 -3;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 24 ".vt[0:23]"  -6 0 5 -4 0 5 -6 4 5 -4 4 5 -6 3 -1 -4 3 
		-1 -6 -1 -1 -4 -1 -1 -4 0 4 -4 4 4 -6 4 4 -6 0 4 -6 3 -1 -6 -1 -1 -4 -1 -1 -4 3 -1 
		-6 3 -2 -6 -1 -2 -4 -1 -2 -4 3 -2 -3 3 -1 -3 -1 -1 -3 3 -2 -3 -1 -2;
	setAttr -s 44 ".ed[0:43]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 10 0 3 9 0 4 6 0 5 7 0 
		6 11 0 7 8 0 8 1 0 9 5 0 
		8 9 0 10 4 0 9 10 1 11 0 0 
		10 11 1 11 8 1 4 12 0 6 13 0 
		12 13 0 7 14 0 13 14 0 5 15 0 
		15 14 0 12 15 0 12 16 0 13 17 0 
		16 17 0 14 18 1 17 18 0 15 19 1 
		19 18 1 16 19 0 15 20 0 14 21 0 
		20 21 0 19 22 0 20 22 0 18 23 0 
		22 23 0 21 23 0;
	setAttr -s 20 ".fc[0:19]" -type "polyFaces" 
		f 4 4 1 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 15 2 -14 16 
		mu 0 4 4 5 6 7 
		f 4 30 32 -35 -36 
		mu 0 4 8 9 10 11 
		f 4 10 19 -12 -4 
		mu 0 4 12 13 14 15 
		f 4 14 13 9 11 
		mu 0 4 16 17 18 19 
		f 4 -9 -16 18 -11 
		mu 0 4 20 21 22 23 
		f 4 6 -17 -8 -2 
		mu 0 4 1 4 7 2 
		f 4 -19 -7 -5 -18 
		mu 0 4 23 22 24 25 
		f 4 -20 17 0 -13 
		mu 0 4 14 13 26 27 
		f 4 8 21 -23 -21 
		mu 0 4 5 28 29 30 
		f 4 3 23 -25 -22 
		mu 0 4 28 31 32 29 
		f 4 -10 25 26 -24 
		mu 0 4 31 6 33 32 
		f 4 -3 20 27 -26 
		mu 0 4 6 5 30 33 
		f 4 22 29 -31 -29 
		mu 0 4 34 35 36 37 
		f 4 24 31 -33 -30 
		mu 0 4 38 39 40 41 
		f 4 -28 28 35 -34 
		mu 0 4 33 30 42 43 
		f 4 -27 36 38 -38 
		mu 0 4 32 33 44 45 
		f 4 33 39 -41 -37 
		mu 0 4 33 43 46 44 
		f 4 34 41 -43 -40 
		mu 0 4 11 10 47 48 
		f 4 -32 37 43 -42 
		mu 0 4 40 39 49 50 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface49" -p "polySurface37";
createNode mesh -n "polySurfaceShape67" -p "polySurface49";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 1 "f[18]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 15 "f[0]" "f[1]" "f[3]" "f[4]" "f[5]" "f[7]" "f[8]" "f[10]" "f[11]" "f[12]" "f[13]" "f[14]" "f[15]" "f[16]" "f[17]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 3 "f[2]" "f[6]" "f[9]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 48 ".uvst[0].uvsp[0:47]" -type "float2" -0.050000012 -0.20000005 
		-0.050000012 0.19999999 1.05 0.19999999 1.05 -0.20000005 -0.050000012 0.19999987 
		-0.050000012 -0.20000005 1.05 -0.20000005 1.05 0.19999987 2.5 1.5 2.5 4 8 4 8 1.5 
		1.1999998 -0.20000005 1.1999998 0.19999999 0.69999981 0.19999999 0.69999981 -0.20000005 
		0.29999995 -0.20000005 0.29999995 0.19999987 -0.20000005 0.19999999 -0.20000005 -0.20000005 
		1.0999999 -0.20000005 1.0999999 0.19999987 2.5 -2.5 8 -2.5 -0.10000011 0.19999999 
		-0.10000011 -0.20000005 1.5999999 -0.20000005 1.5999999 0.19999987 2.5 -5 8 -5 -0.60000008 
		0.19999987 -0.60000008 -0.20000005 0.29999995 1.1999998 -0.20000005 1.1999998 1.5999999 
		1.1999998 1.0999999 1.1999998 -0.050000012 1.1999998 1.05 1.1999998 -0.10000011 1.1999998 
		-0.60000008 1.1999998 0.69999981 1.1999998 1.1999998 1.1999998 -0.050000012 1.1999998 
		1.05 1.1999998 0.625 0.25 0.375 0.25 0.375 0.5 0.625 0.5;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 24 ".vt[0:23]"  13 -2 12 24 -2 12 13 5 12 24 5 12.000002 
		13 5 -6 24 5 -6 13 -2 -6 24 -2 -6 13 5 7 13 -2 7 24 -2 7 24 5 7 13 5 -1 13 -2 -1 
		24 -2 -1 24 5 -1 13 2.3841858e-007 12 13 -2.3841858e-007 7 13 -2.3841858e-007 -1 
		13 -2.3841858e-007 -6 24 -2.3841858e-007 -6 24 2.3841858e-007 -1 24 2.3841858e-007 
		7 24 2.3841858e-007 12.000002;
	setAttr -s 43 ".ed[0:42]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 16 0 1 23 0 
		2 8 0 3 11 0 4 19 0 5 20 0 
		6 13 0 7 14 0 9 0 0 8 17 0 
		10 1 0 9 10 1 11 15 0 10 22 1 
		12 4 0 13 9 0 12 18 0 14 10 0 
		13 14 1 15 5 0 14 21 1 16 2 0 
		17 9 1 16 17 1 18 13 1 17 18 0 
		19 6 0 18 19 1 20 7 0 19 20 1 
		21 15 1 20 21 1 22 11 1 21 22 1 
		23 3 0 22 23 1 23 16 1 2 4 0 
		3 5 0;
	setAttr -s 19 ".fc[0:18]" -type "polyFaces" 
		f 4 4 -41 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 30 3 -33 -34 
		mu 0 4 4 5 6 7 
		f 4 12 0 -15 -16 
		mu 0 4 8 9 10 11 
		f 4 5 -40 -18 14 
		mu 0 4 12 13 14 15 
		f 4 -27 -28 -5 -13 
		mu 0 4 16 17 18 19 
		f 4 -29 -30 26 -20 
		mu 0 4 20 21 17 16 
		f 4 19 15 -22 -23 
		mu 0 4 22 8 11 23 
		f 4 -38 -25 21 17 
		mu 0 4 14 24 25 15 
		f 4 -31 -32 28 -11 
		mu 0 4 26 27 21 20 
		f 4 10 22 -12 -4 
		mu 0 4 28 22 23 29 
		f 4 -36 32 11 24 
		mu 0 4 24 30 31 25 
		f 4 -14 -7 -26 27 
		mu 0 4 17 32 33 18 
		f 4 -9 -19 20 31 
		mu 0 4 27 34 35 21 
		f 4 8 33 -10 -3 
		mu 0 4 36 4 7 37 
		f 4 23 9 35 34 
		mu 0 4 38 39 30 24 
		f 4 16 -35 37 36 
		mu 0 4 40 38 24 14 
		f 4 38 7 -37 39 
		mu 0 4 13 41 40 14 
		f 4 25 1 -39 40 
		mu 0 4 1 42 43 2 
		f 4 -2 41 2 -43 
		mu 0 4 44 45 46 47 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface50" -p "polySurface37";
createNode mesh -n "polySurfaceShape68" -p "polySurface50";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 3 "f[3]" "f[4]" "f[5]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 2 "f[0]" "f[2]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 1 "f[1]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 24 ".uvst[0].uvsp[0:23]" -type "float2" 0.3223848 0.72767341 
		0.3223848 0.61181581 0.3223848 0.57319653 0.39962325 0.72767341 -0.68385315 -0.012979269 
		1.6838531 -0.012979269 1.6838531 1.0129791 -0.68385315 1.0129791 0.31682059 0.95018494 
		0.22763325 0.8026067 0.2499301 0.82835281 0.31682059 0.90559131 0.375 0.75 0.625 
		0.75 0.625 1 0.375 1 0.625 0 0.875 0 0.875 0.25 0.625 0.25 0.125 0 0.375 0 0.375 
		0.25 0.125 0.25;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 4 ".pt";
	setAttr ".pt[1]" -type "float3" 1 0 0 ;
	setAttr ".pt[7]" -type "float3" 1 0 0 ;
	setAttr -s 8 ".vt[0:7]"  13 -2 4 16 -2 4 13 0 4 17 -2 4 13 5.9604645e-008 
		2 17 -2 2 13 -2 2 16 -2 2;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 6 ".fc[0:5]" -type "polyFaces" 
		f 4 0 5 -2 -5 
		mu 0 4 0 1 2 3 
		f 4 1 7 -3 -7 
		mu 0 4 4 5 6 7 
		f 4 2 9 -4 -9 
		mu 0 4 8 9 10 11 
		f 4 3 11 -1 -11 
		mu 0 4 12 13 14 15 
		f 4 -12 -10 -8 -6 
		mu 0 4 16 17 18 19 
		f 4 10 4 6 8 
		mu 0 4 20 21 22 23 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface51" -p "polySurface37";
createNode mesh -n "polySurfaceShape69" -p "polySurface51";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 3 "f[1]" "f[2]" "f[3]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 3 "f[0]" "f[4]" "f[5]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 20 ".uvst[0].uvsp[0:19]" -type "float2" 1.2777778 -0.20000005 
		1.8333333 -0.20000005 1.8333333 0.39999992 1.2777778 0.39999992 0.375 0.25 0.625 
		0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 1.1999998 -0.20000005 
		1.2999997 -0.20000005 1.2999997 0.39999992 1.1999998 0.39999992 -0.30000004 -0.20000005 
		-0.20000005 -0.20000005 -0.20000005 0.39999992 -0.30000004 0.39999992;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  16 -2 -2 21 -2 -2 16 1 -2 21 1 -2 16 1 -3 
		21 1 -3 16 -2 -3 21 -2 -3;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 6 ".fc[0:5]" -type "polyFaces" 
		f 4 0 5 -2 -5 
		mu 0 4 0 1 2 3 
		f 4 1 7 -3 -7 
		mu 0 4 4 5 6 7 
		f 4 2 9 -4 -9 
		mu 0 4 7 6 8 9 
		f 4 3 11 -1 -11 
		mu 0 4 9 8 10 11 
		f 4 -12 -10 -8 -6 
		mu 0 4 12 13 14 15 
		f 4 10 4 6 8 
		mu 0 4 16 17 18 19 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface52" -p "polySurface37";
createNode mesh -n "polySurfaceShape70" -p "polySurface52";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 3 "f[1]" "f[2]" "f[3]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 3 "f[0]" "f[4]" "f[5]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 20 ".uvst[0].uvsp[0:19]" -type "float2" 1.7222223 -0.20000005 
		1.8333333 -0.20000005 1.8333333 0.39999992 1.7222223 0.39999992 0.375 0.25 0.625 
		0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.99999976 -0.20000005 
		1.1999998 -0.20000005 1.1999998 0.39999992 0.99999976 0.39999992 -0.20000008 -0.20000005 
		-8.9406967e-008 -0.20000005 -8.9406967e-008 0.39999992 -0.20000008 0.39999992;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  20 -2 0 21 -2 0 20 1 0 21 1 0 20 1 -2 21 
		1 -2 20 -2 -2 21 -2 -2;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 6 ".fc[0:5]" -type "polyFaces" 
		f 4 0 5 -2 -5 
		mu 0 4 0 1 2 3 
		f 4 1 7 -3 -7 
		mu 0 4 4 5 6 7 
		f 4 2 9 -4 -9 
		mu 0 4 7 6 8 9 
		f 4 3 11 -1 -11 
		mu 0 4 9 8 10 11 
		f 4 -12 -10 -8 -6 
		mu 0 4 12 13 14 15 
		f 4 10 4 6 8 
		mu 0 4 16 17 18 19 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface53" -p "polySurface37";
createNode mesh -n "polySurfaceShape71" -p "polySurface53";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 4 "f[0]" "f[1]" "f[2]" "f[3]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 2 "f[4]" "f[5]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 18 ".uvst[0].uvsp[0:17]" -type "float2" 0.375 0 0.625 0 
		0.625 0.25 0.375 0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.19999981 
		-0.20000005 0.3999998 -0.20000005 0.3999998 0.39999992 0.19999981 0.39999992 0.5999999 
		-0.20000005 0.79999983 -0.20000005 0.79999983 0.39999992 0.5999999 0.39999992;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  20 -2 8 21 -2 8 20 1 8 21 1 8 20 1 6 21 
		1 6 20 -2 6 21 -2 6;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 6 ".fc[0:5]" -type "polyFaces" 
		f 4 0 5 -2 -5 
		mu 0 4 0 1 2 3 
		f 4 1 7 -3 -7 
		mu 0 4 3 2 4 5 
		f 4 2 9 -4 -9 
		mu 0 4 5 4 6 7 
		f 4 3 11 -1 -11 
		mu 0 4 7 6 8 9 
		f 4 -12 -10 -8 -6 
		mu 0 4 10 11 12 13 
		f 4 10 4 6 8 
		mu 0 4 14 15 16 17 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface54" -p "polySurface37";
createNode mesh -n "polySurfaceShape72" -p "polySurface54";
	setAttr -k off ".v";
	setAttr -s 2 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 3 "f[1]" "f[2]" "f[3]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 3 "f[0]" "f[4]" "f[5]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 20 ".uvst[0].uvsp[0:19]" -type "float2" 1.2777778 -0.20000005 
		1.8333333 -0.20000005 1.8333333 0.39999992 1.2777778 0.39999992 0.375 0.25 0.625 
		0.25 0.625 0.5 0.375 0.5 0.625 0.75 0.375 0.75 0.625 1 0.375 1 0.099999785 -0.20000005 
		0.19999981 -0.20000005 0.19999981 0.39999992 0.099999785 0.39999992 0.79999995 -0.20000005 
		0.89999986 -0.20000005 0.89999986 0.39999992 0.79999995 0.39999992;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 8 ".vt[0:7]"  16 -2 9 21 -2 9 16 1 9 21 1 9 16 1 8 21 
		1 8 16 -2 8 21 -2 8;
	setAttr -s 12 ".ed[0:11]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0;
	setAttr -s 6 ".fc[0:5]" -type "polyFaces" 
		f 4 0 5 -2 -5 
		mu 0 4 0 1 2 3 
		f 4 1 7 -3 -7 
		mu 0 4 4 5 6 7 
		f 4 2 9 -4 -9 
		mu 0 4 7 6 8 9 
		f 4 3 11 -1 -11 
		mu 0 4 9 8 10 11 
		f 4 -12 -10 -8 -6 
		mu 0 4 12 13 14 15 
		f 4 10 4 6 8 
		mu 0 4 16 17 18 19 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface55" -p "polySurface37";
createNode mesh -n "polySurfaceShape73" -p "polySurface55";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 6 "f[1]" "f[2]" "f[3]" "f[4]" "f[5]" "f[8]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 4 "f[0]" "f[6]" "f[9]" "f[11]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 2 "f[7]" "f[10]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 38 ".uvst[0].uvsp[0:37]" -type "float2" 0.94542408 0.0022560358 
		0.94542408 1.0022559 1.1698737 1.0022559 1.1698737 0.0022560358 0.375 0.25 0.375 
		0.33446109 0.625 0.33446109 0.625 0.25 0.375 0.91553891 0.375 1 0.625 1 0.625 0.91553891 
		0.625 0 0.70946109 0.25 0.70946115 0 0.29053888 0 0.29053888 0.25 0.375 0 0.375 0.38920009 
		0.625 0.38920009 1.5999999 0.19999993 1.5999999 1.1999998 0.89999986 1.1999998 0.89999986 
		0.19999993 0.5 2.5 0.5 6 1.5 6 1.5 2.5 0.375 0.5 0.625 0.5 0.69999981 1.1999998 0.69999981 
		0.19999993 0.5 1.5 1.5 1.5 0.29999995 0.19999993 0.29999995 1.1999998 0.099999905 
		1.1999998 0.099999905 0.19999993;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 16 ".vt[0:15]"  9 0 16 11 0 16 9 5 16 11 5 16 9 5 7 11 5 
		7 9 0 7 11 0 7 9 5 16 11 5 16 11 0 16 9 0 16 9 5 9 11 5 9 11 0 9 9 0 9;
	setAttr -s 28 ".ed[0:27]"  0 1 0 2 3 0 
		4 5 0 6 7 0 0 2 0 1 3 0 
		2 8 0 3 9 0 4 6 0 5 7 0 
		6 15 0 7 14 0 8 12 0 9 13 0 
		8 9 1 10 1 0 9 10 1 11 0 0 
		10 11 1 11 8 0 12 4 0 13 5 0 
		12 13 1 14 10 0 13 14 1 15 11 0 
		14 15 1 15 12 0;
	setAttr -s 12 ".fc[0:11]" -type "polyFaces" 
		f 4 4 1 -6 -1 
		mu 0 4 0 1 2 3 
		f 4 6 14 -8 -2 
		mu 0 4 4 5 6 7 
		f 4 17 0 -16 18 
		mu 0 4 8 9 10 11 
		f 4 5 7 16 15 
		mu 0 4 12 7 13 14 
		f 4 19 -7 -5 -18 
		mu 0 4 15 16 4 17 
		f 4 12 22 -14 -15 
		mu 0 4 5 18 19 6 
		f 4 -17 13 24 23 
		mu 0 4 20 21 22 23 
		f 4 25 -19 -24 26 
		mu 0 4 24 25 26 27 
		f 4 20 2 -22 -23 
		mu 0 4 18 28 29 19 
		f 4 -25 21 9 11 
		mu 0 4 23 22 30 31 
		f 4 10 -27 -12 -4 
		mu 0 4 32 24 27 33 
		f 4 -9 -21 -28 -11 
		mu 0 4 34 35 36 37 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode transform -n "polySurface56" -p "polySurface37";
createNode mesh -n "polySurfaceShape74" -p "polySurface56";
	setAttr -k off ".v";
	setAttr -s 3 ".iog[0].og";
	setAttr ".iog[0].og[0].gcl" -type "componentList" 2 "f[1]" "f[4]";
	setAttr ".iog[0].og[1].gcl" -type "componentList" 4 "f[0]" "f[3]" "f[5]" "f[7]";
	setAttr ".iog[0].og[2].gcl" -type "componentList" 2 "f[2]" "f[6]";
	setAttr ".vir" yes;
	setAttr ".vif" yes;
	setAttr ".uvst[0].uvsn" -type "string" "map1";
	setAttr -s 26 ".uvst[0].uvsp[0:25]" -type "float2" -0.17682427 0.0022560358 
		-0.17682427 1.0022559 0.047625363 1.0022559 0.047625363 0.0022560358 0.375 0.25 0.375 
		0.5 0.42474926 0.5 0.42474926 0.25 -4.5 2.5 -4.5 6 -3.5 6 -3.5 2.5 0.099999905 0.19999993 
		0.099999905 1.1999998 -0.60000002 1.1999998 -0.60000002 0.19999993 0.625 0.5 0.625 
		0.25 0.94542408 1.0022559 0.94542408 0.0022560358 0.5 6 0.5 2.5 -0.3888889 1.1999998 
		-0.3888889 0.19999993 0.5 0.19999993 0.5 1.1999998;
	setAttr ".cuvs" -type "string" "map1";
	setAttr ".dcc" -type "string" "Ambient+Diffuse";
	setAttr ".covm[0]"  0 1 1;
	setAttr ".cdvm[0]"  0 1 1;
	setAttr -s 12 ".vt[0:11]"  -1 0 16 9 0 16 -1 5 16 9 5 16 -1 5 9 9 5 
		9 -1 0 9 9 0 9 1 5 9 1 5 16 1 0 16 1 0 9;
	setAttr -s 20 ".ed[0:19]"  0 10 0 2 9 0 
		4 8 0 6 11 0 0 2 0 1 3 0 
		2 4 0 3 5 0 4 6 0 5 7 0 
		6 0 0 7 1 0 8 5 0 9 3 0 
		8 9 1 10 1 0 9 10 1 11 7 0 
		10 11 1 11 8 0;
	setAttr -s 8 ".fc[0:7]" -type "polyFaces" 
		f 4 4 1 16 -1 
		mu 0 4 0 1 2 3 
		f 4 6 2 14 -2 
		mu 0 4 4 5 6 7 
		f 4 10 0 18 -4 
		mu 0 4 8 9 10 11 
		f 4 -9 -7 -5 -11 
		mu 0 4 12 13 14 15 
		f 4 -15 12 -8 -14 
		mu 0 4 7 6 16 17 
		f 4 -17 13 -6 -16 
		mu 0 4 3 2 18 19 
		f 4 -19 15 -12 -18 
		mu 0 4 11 10 20 21 
		f 4 -20 17 -10 -13 
		mu 0 4 22 23 24 25 ;
	setAttr ".cd" -type "dataPolyComponent" Index_Data Edge 0 ;
	setAttr ".cvd" -type "dataPolyComponent" Index_Data Vertex 0 ;
	setAttr ".hfd" -type "dataPolyComponent" Index_Data Face 0 ;
	setAttr ".db" yes;
	setAttr ".bck" 3;
	setAttr ".bw" 4;
	setAttr ".dn" yes;
createNode lightLinker -s -n "lightLinker1";
	setAttr -s 10 ".lnk";
	setAttr -s 10 ".slnk";
createNode displayLayerManager -n "layerManager";
	setAttr ".cdl" 2;
	setAttr -s 3 ".dli[1:2]"  1 2;
createNode displayLayer -n "defaultLayer";
createNode renderLayerManager -n "renderLayerManager";
createNode renderLayer -n "defaultRenderLayer";
	setAttr ".g" yes;
createNode polyBridgeEdge -n "polyBridgeEdge1";
	setAttr ".tp" 0;
	setAttr ".c[0]"  0 1 1;
	setAttr ".ctp" 1;
	setAttr ".sma" 0;
createNode polyBridgeEdge -n "polyBridgeEdge3";
	setAttr ".tp" 0;
	setAttr ".c[0]"  0 1 1;
	setAttr ".ctp" 1;
	setAttr ".sma" 0;
createNode polyBridgeEdge -n "polyBridgeEdge4";
	setAttr ".tp" 0;
	setAttr ".c[0]"  0 1 1;
	setAttr ".ctp" 1;
	setAttr ".sma" 0;
createNode script -n "uiConfigurationScriptNode";
	setAttr ".b" -type "string" (
		"// Maya Mel UI Configuration File.\n//\n//  This script is machine generated.  Edit at your own risk.\n//\n//\n\nglobal string $gMainPane;\nif (`paneLayout -exists $gMainPane`) {\n\n\tglobal int $gUseScenePanelConfig;\n\tint    $useSceneConfig = $gUseScenePanelConfig;\n\tint    $menusOkayInPanels = `optionVar -q allowMenusInPanels`;\tint    $nVisPanes = `paneLayout -q -nvp $gMainPane`;\n\tint    $nPanes = 0;\n\tstring $editorName;\n\tstring $panelName;\n\tstring $itemFilterName;\n\tstring $panelConfig;\n\n\t//\n\t//  get current state of the UI\n\t//\n\tsceneUIReplacement -update $gMainPane;\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"Stereo\" (localizedPanelLabel(\"Stereo\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"Stereo\" -l (localizedPanelLabel(\"Stereo\")) -mbv $menusOkayInPanels `;\nstring $editorName = ($panelName+\"Editor\");\n            stereoCameraView -e \n                -camera \"persp\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n"
		+ "                -displayAppearance \"wireframe\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n"
		+ "                -colorResolution 4 4 \n                -bumpResolution 4 4 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n"
		+ "                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -shadows 0\n                -displayMode \"centerEye\" \n                -viewColor 0 0 0 1 \n                $editorName;\nstereoCameraView -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Stereo\")) -mbv $menusOkayInPanels  $panelName;\nstring $editorName = ($panelName+\"Editor\");\n            stereoCameraView -e \n                -camera \"persp\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n                -activeOnly 0\n"
		+ "                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -colorResolution 4 4 \n                -bumpResolution 4 4 \n                -textureCompression 0\n"
		+ "                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n"
		+ "                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -shadows 0\n                -displayMode \"centerEye\" \n                -viewColor 0 0 0 1 \n                $editorName;\nstereoCameraView -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Top View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Top View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"top\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n"
		+ "                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -colorResolution 4 4 \n                -bumpResolution 4 4 \n"
		+ "                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n"
		+ "                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -shadows 0\n                $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Top View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"top\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n"
		+ "            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -colorResolution 4 4 \n            -bumpResolution 4 4 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 0\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n"
		+ "            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n"
		+ "\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Side View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Side View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"side\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n"
		+ "                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -colorResolution 4 4 \n                -bumpResolution 4 4 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n"
		+ "                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -shadows 0\n                $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n"
		+ "\t\tmodelPanel -edit -l (localizedPanelLabel(\"Side View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"side\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n"
		+ "            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -colorResolution 4 4 \n            -bumpResolution 4 4 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 0\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -joints 1\n            -ikHandles 1\n"
		+ "            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Front View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Front View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"front\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"wireframe\" \n"
		+ "                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 0\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 0\n                -smoothWireframe 0\n                -lineWidth 1\n                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -colorResolution 4 4 \n                -bumpResolution 4 4 \n"
		+ "                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 0\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n"
		+ "                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -shadows 0\n                $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Front View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"front\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"wireframe\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n"
		+ "            -twoSidedLighting 1\n            -backfaceCulling 0\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 0\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -colorResolution 4 4 \n            -bumpResolution 4 4 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 0\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n"
		+ "            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n"
		+ "\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"modelPanel\" (localizedPanelLabel(\"Persp View\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `modelPanel -unParent -l (localizedPanelLabel(\"Persp View\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            modelEditor -e \n                -camera \"persp\" \n                -useInteractiveMode 0\n                -displayLights \"default\" \n                -displayAppearance \"smoothShaded\" \n                -activeOnly 0\n                -ignorePanZoom 0\n                -wireframeOnShaded 0\n                -headsUpDisplay 1\n                -selectionHiliteDisplay 1\n                -useDefaultMaterial 0\n                -bufferMode \"double\" \n                -twoSidedLighting 1\n                -backfaceCulling 1\n                -xray 0\n                -jointXray 0\n                -activeComponentsXray 0\n                -displayTextures 1\n                -smoothWireframe 0\n                -lineWidth 1\n"
		+ "                -textureAnisotropic 0\n                -textureHilight 1\n                -textureSampling 2\n                -textureDisplay \"modulate\" \n                -textureMaxSize 16384\n                -fogging 0\n                -fogSource \"fragment\" \n                -fogMode \"linear\" \n                -fogStart 0\n                -fogEnd 100\n                -fogDensity 0.1\n                -fogColor 0.5 0.5 0.5 1 \n                -maxConstantTransparency 1\n                -rendererName \"base_OpenGL_Renderer\" \n                -colorResolution 256 256 \n                -bumpResolution 512 512 \n                -textureCompression 0\n                -transparencyAlgorithm \"frontAndBackCull\" \n                -transpInShadows 0\n                -cullingOverride \"none\" \n                -lowQualityLighting 0\n                -maximumNumHardwareLights 1\n                -occlusionCulling 0\n                -shadingModel 0\n                -useBaseRenderer 0\n                -useReducedRenderer 0\n                -smallObjectCulling 0\n"
		+ "                -smallObjectThreshold -1 \n                -interactiveDisableShadows 0\n                -interactiveBackFaceCull 0\n                -sortTransparent 1\n                -nurbsCurves 1\n                -nurbsSurfaces 1\n                -polymeshes 1\n                -subdivSurfaces 1\n                -planes 1\n                -lights 1\n                -cameras 1\n                -controlVertices 1\n                -hulls 1\n                -grid 1\n                -joints 1\n                -ikHandles 1\n                -deformers 1\n                -dynamics 1\n                -fluids 1\n                -hairSystems 1\n                -follicles 1\n                -nCloths 1\n                -nParticles 1\n                -nRigids 1\n                -dynamicConstraints 1\n                -locators 1\n                -manipulators 1\n                -dimensions 1\n                -handles 1\n                -pivots 1\n                -textures 1\n                -strokes 1\n                -shadows 0\n                $editorName;\n"
		+ "modelEditor -e -viewSelected 0 $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tmodelPanel -edit -l (localizedPanelLabel(\"Persp View\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        modelEditor -e \n            -camera \"persp\" \n            -useInteractiveMode 0\n            -displayLights \"default\" \n            -displayAppearance \"smoothShaded\" \n            -activeOnly 0\n            -ignorePanZoom 0\n            -wireframeOnShaded 0\n            -headsUpDisplay 1\n            -selectionHiliteDisplay 1\n            -useDefaultMaterial 0\n            -bufferMode \"double\" \n            -twoSidedLighting 1\n            -backfaceCulling 1\n            -xray 0\n            -jointXray 0\n            -activeComponentsXray 0\n            -displayTextures 1\n            -smoothWireframe 0\n            -lineWidth 1\n            -textureAnisotropic 0\n            -textureHilight 1\n            -textureSampling 2\n            -textureDisplay \"modulate\" \n            -textureMaxSize 16384\n            -fogging 0\n"
		+ "            -fogSource \"fragment\" \n            -fogMode \"linear\" \n            -fogStart 0\n            -fogEnd 100\n            -fogDensity 0.1\n            -fogColor 0.5 0.5 0.5 1 \n            -maxConstantTransparency 1\n            -rendererName \"base_OpenGL_Renderer\" \n            -colorResolution 256 256 \n            -bumpResolution 512 512 \n            -textureCompression 0\n            -transparencyAlgorithm \"frontAndBackCull\" \n            -transpInShadows 0\n            -cullingOverride \"none\" \n            -lowQualityLighting 0\n            -maximumNumHardwareLights 1\n            -occlusionCulling 0\n            -shadingModel 0\n            -useBaseRenderer 0\n            -useReducedRenderer 0\n            -smallObjectCulling 0\n            -smallObjectThreshold -1 \n            -interactiveDisableShadows 0\n            -interactiveBackFaceCull 0\n            -sortTransparent 1\n            -nurbsCurves 1\n            -nurbsSurfaces 1\n            -polymeshes 1\n            -subdivSurfaces 1\n            -planes 1\n            -lights 1\n"
		+ "            -cameras 1\n            -controlVertices 1\n            -hulls 1\n            -grid 1\n            -joints 1\n            -ikHandles 1\n            -deformers 1\n            -dynamics 1\n            -fluids 1\n            -hairSystems 1\n            -follicles 1\n            -nCloths 1\n            -nParticles 1\n            -nRigids 1\n            -dynamicConstraints 1\n            -locators 1\n            -manipulators 1\n            -dimensions 1\n            -handles 1\n            -pivots 1\n            -textures 1\n            -strokes 1\n            -shadows 0\n            $editorName;\nmodelEditor -e -viewSelected 0 $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"outlinerPanel\" (localizedPanelLabel(\"Outliner\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `outlinerPanel -unParent -l (localizedPanelLabel(\"Outliner\")) -mbv $menusOkayInPanels `;\n\t\t\t$editorName = $panelName;\n            outlinerEditor -e \n                -showShapes 1\n"
		+ "                -showAttributes 1\n                -showConnected 0\n                -showAnimCurvesOnly 0\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 1\n                -showAssets 1\n                -showContainedOnly 1\n                -showPublishedAsConnected 0\n                -showContainerContents 1\n                -ignoreDagHierarchy 0\n                -expandConnections 0\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 0\n                -highlightActive 1\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"defaultSetFilter\" \n                -showSetMembers 1\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n"
		+ "                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\toutlinerPanel -edit -l (localizedPanelLabel(\"Outliner\")) -mbv $menusOkayInPanels  $panelName;\n\t\t$editorName = $panelName;\n        outlinerEditor -e \n            -showShapes 1\n            -showAttributes 1\n            -showConnected 0\n            -showAnimCurvesOnly 0\n            -showMuteInfo 0\n            -organizeByLayer 1\n"
		+ "            -showAnimLayerWeight 1\n            -autoExpandLayers 1\n            -autoExpand 0\n            -showDagOnly 1\n            -showAssets 1\n            -showContainedOnly 1\n            -showPublishedAsConnected 0\n            -showContainerContents 1\n            -ignoreDagHierarchy 0\n            -expandConnections 0\n            -showUpstreamCurves 1\n            -showUnitlessCurves 1\n            -showCompounds 1\n            -showLeafs 1\n            -showNumericAttrsOnly 0\n            -highlightActive 1\n            -autoSelectNewObjects 0\n            -doNotSelectNewObjects 0\n            -dropIsParent 1\n            -transmitFilters 0\n            -setFilter \"defaultSetFilter\" \n            -showSetMembers 1\n            -allowMultiSelection 1\n            -alwaysToggleSelect 0\n            -directSelect 0\n            -displayMode \"DAG\" \n            -expandObjects 0\n            -setsIgnoreFilters 1\n            -containersIgnoreFilters 0\n            -editAttrName 0\n            -showAttrValues 0\n            -highlightSecondary 0\n"
		+ "            -showUVAttrsOnly 0\n            -showTextureNodesOnly 0\n            -attrAlphaOrder \"default\" \n            -animLayerFilterOptions \"allAffecting\" \n            -sortOrder \"none\" \n            -longNames 0\n            -niceNames 1\n            -showNamespace 1\n            -showPinIcons 0\n            $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"graphEditor\" (localizedPanelLabel(\"Graph Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"graphEditor\" -l (localizedPanelLabel(\"Graph Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n"
		+ "                -autoExpand 1\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 0\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 1\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 1\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n"
		+ "                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"GraphEd\");\n            animCurveEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 1\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -showResults \"off\" \n                -showBufferCurves \"off\" \n                -smoothness \"fine\" \n                -resultSamples 1\n                -resultScreenSamples 0\n                -resultUpdate \"delayed\" \n                -showUpstreamCurves 1\n                -stackedCurves 0\n"
		+ "                -stackedCurvesMin -1\n                -stackedCurvesMax 1\n                -stackedCurvesSpace 0.2\n                -displayNormalized 0\n                -preSelectionHighlight 0\n                -constrainDrag 0\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Graph Editor\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 1\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n"
		+ "                -showUpstreamCurves 1\n                -showUnitlessCurves 1\n                -showCompounds 0\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 1\n                -doNotSelectNewObjects 0\n                -dropIsParent 1\n                -transmitFilters 1\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n"
		+ "                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 1\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"GraphEd\");\n            animCurveEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 1\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -showResults \"off\" \n                -showBufferCurves \"off\" \n                -smoothness \"fine\" \n                -resultSamples 1\n                -resultScreenSamples 0\n                -resultUpdate \"delayed\" \n                -showUpstreamCurves 1\n                -stackedCurves 0\n                -stackedCurvesMin -1\n                -stackedCurvesMax 1\n                -stackedCurvesSpace 0.2\n                -displayNormalized 0\n                -preSelectionHighlight 0\n                -constrainDrag 0\n                $editorName;\n"
		+ "\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dopeSheetPanel\" (localizedPanelLabel(\"Dope Sheet\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dopeSheetPanel\" -l (localizedPanelLabel(\"Dope Sheet\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n"
		+ "                -showUnitlessCurves 0\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 1\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n"
		+ "                -showPinIcons 0\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"DopeSheetEd\");\n            dopeSheetEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -outliner \"dopeSheetPanel1OutlineEd\" \n                -showSummary 1\n                -showScene 0\n                -hierarchyBelow 0\n                -showTicks 1\n                -selectionWindow 0 0 0 0 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Dope Sheet\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"OutlineEd\");\n            outlinerEditor -e \n                -showShapes 1\n                -showAttributes 1\n                -showConnected 1\n                -showAnimCurvesOnly 1\n"
		+ "                -showMuteInfo 0\n                -organizeByLayer 1\n                -showAnimLayerWeight 1\n                -autoExpandLayers 1\n                -autoExpand 0\n                -showDagOnly 0\n                -showAssets 1\n                -showContainedOnly 0\n                -showPublishedAsConnected 0\n                -showContainerContents 0\n                -ignoreDagHierarchy 0\n                -expandConnections 1\n                -showUpstreamCurves 1\n                -showUnitlessCurves 0\n                -showCompounds 1\n                -showLeafs 1\n                -showNumericAttrsOnly 1\n                -highlightActive 0\n                -autoSelectNewObjects 0\n                -doNotSelectNewObjects 1\n                -dropIsParent 1\n                -transmitFilters 0\n                -setFilter \"0\" \n                -showSetMembers 0\n                -allowMultiSelection 1\n                -alwaysToggleSelect 0\n                -directSelect 0\n                -displayMode \"DAG\" \n                -expandObjects 0\n"
		+ "                -setsIgnoreFilters 1\n                -containersIgnoreFilters 0\n                -editAttrName 0\n                -showAttrValues 0\n                -highlightSecondary 0\n                -showUVAttrsOnly 0\n                -showTextureNodesOnly 0\n                -attrAlphaOrder \"default\" \n                -animLayerFilterOptions \"allAffecting\" \n                -sortOrder \"none\" \n                -longNames 0\n                -niceNames 1\n                -showNamespace 1\n                -showPinIcons 0\n                $editorName;\n\n\t\t\t$editorName = ($panelName+\"DopeSheetEd\");\n            dopeSheetEditor -e \n                -displayKeys 1\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"integer\" \n                -snapValue \"none\" \n                -outliner \"dopeSheetPanel1OutlineEd\" \n                -showSummary 1\n                -showScene 0\n                -hierarchyBelow 0\n"
		+ "                -showTicks 1\n                -selectionWindow 0 0 0 0 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"clipEditorPanel\" (localizedPanelLabel(\"Trax Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"clipEditorPanel\" -l (localizedPanelLabel(\"Trax Editor\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = clipEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 0 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Trax Editor\")) -mbv $menusOkayInPanels  $panelName;\n"
		+ "\t\t\t$editorName = clipEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 0 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"sequenceEditorPanel\" (localizedPanelLabel(\"Camera Sequencer\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"sequenceEditorPanel\" -l (localizedPanelLabel(\"Camera Sequencer\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = sequenceEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n"
		+ "                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 1 \n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Camera Sequencer\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = sequenceEditorNameFromPanel($panelName);\n            clipEditor -e \n                -displayKeys 0\n                -displayTangents 0\n                -displayActiveKeys 0\n                -displayActiveKeyTangents 0\n                -displayInfinities 0\n                -autoFit 0\n                -snapTime \"none\" \n                -snapValue \"none\" \n                -manageSequencer 1 \n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"hyperGraphPanel\" (localizedPanelLabel(\"Hypergraph Hierarchy\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n"
		+ "\t\t\t$panelName = `scriptedPanel -unParent  -type \"hyperGraphPanel\" -l (localizedPanelLabel(\"Hypergraph Hierarchy\")) -mbv $menusOkayInPanels `;\n\n\t\t\t$editorName = ($panelName+\"HyperGraphEd\");\n            hyperGraph -e \n                -graphLayoutStyle \"hierarchicalLayout\" \n                -orientation \"horiz\" \n                -mergeConnections 0\n                -zoom 1\n                -animateTransition 0\n                -showRelationships 1\n                -showShapes 0\n                -showDeformers 0\n                -showExpressions 0\n                -showConstraints 0\n                -showUnderworld 0\n                -showInvisible 0\n                -transitionFrames 1\n                -opaqueContainers 0\n                -freeform 0\n                -imagePosition 0 0 \n                -imageScale 1\n                -imageEnabled 0\n                -graphType \"DAG\" \n                -heatMapDisplay 0\n                -updateSelection 1\n                -updateNodeAdded 1\n                -useDrawOverrideColor 0\n                -limitGraphTraversal -1\n"
		+ "                -range -1 -1 \n                -iconSize \"smallIcons\" \n                -showCachedConnections 0\n                $editorName;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Hypergraph Hierarchy\")) -mbv $menusOkayInPanels  $panelName;\n\n\t\t\t$editorName = ($panelName+\"HyperGraphEd\");\n            hyperGraph -e \n                -graphLayoutStyle \"hierarchicalLayout\" \n                -orientation \"horiz\" \n                -mergeConnections 0\n                -zoom 1\n                -animateTransition 0\n                -showRelationships 1\n                -showShapes 0\n                -showDeformers 0\n                -showExpressions 0\n                -showConstraints 0\n                -showUnderworld 0\n                -showInvisible 0\n                -transitionFrames 1\n                -opaqueContainers 0\n                -freeform 0\n                -imagePosition 0 0 \n                -imageScale 1\n                -imageEnabled 0\n                -graphType \"DAG\" \n"
		+ "                -heatMapDisplay 0\n                -updateSelection 1\n                -updateNodeAdded 1\n                -useDrawOverrideColor 0\n                -limitGraphTraversal -1\n                -range -1 -1 \n                -iconSize \"smallIcons\" \n                -showCachedConnections 0\n                $editorName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"hyperShadePanel\" (localizedPanelLabel(\"Hypershade\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"hyperShadePanel\" -l (localizedPanelLabel(\"Hypershade\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Hypershade\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"visorPanel\" (localizedPanelLabel(\"Visor\")) `;\n\tif (\"\" == $panelName) {\n"
		+ "\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"visorPanel\" -l (localizedPanelLabel(\"Visor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Visor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"polyTexturePlacementPanel\" (localizedPanelLabel(\"UV Texture Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"polyTexturePlacementPanel\" -l (localizedPanelLabel(\"UV Texture Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"UV Texture Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"renderWindowPanel\" (localizedPanelLabel(\"Render View\")) `;\n"
		+ "\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"renderWindowPanel\" -l (localizedPanelLabel(\"Render View\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Render View\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextPanel \"blendShapePanel\" (localizedPanelLabel(\"Blend Shape\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\tblendShapePanel -unParent -l (localizedPanelLabel(\"Blend Shape\")) -mbv $menusOkayInPanels ;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tblendShapePanel -edit -l (localizedPanelLabel(\"Blend Shape\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dynRelEdPanel\" (localizedPanelLabel(\"Dynamic Relationships\")) `;\n\tif (\"\" == $panelName) {\n"
		+ "\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dynRelEdPanel\" -l (localizedPanelLabel(\"Dynamic Relationships\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Dynamic Relationships\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"relationshipPanel\" (localizedPanelLabel(\"Relationship Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"relationshipPanel\" -l (localizedPanelLabel(\"Relationship Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Relationship Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"referenceEditorPanel\" (localizedPanelLabel(\"Reference Editor\")) `;\n"
		+ "\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"referenceEditorPanel\" -l (localizedPanelLabel(\"Reference Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Reference Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"componentEditorPanel\" (localizedPanelLabel(\"Component Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"componentEditorPanel\" -l (localizedPanelLabel(\"Component Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Component Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"dynPaintScriptedPanelType\" (localizedPanelLabel(\"Paint Effects\")) `;\n"
		+ "\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"dynPaintScriptedPanelType\" -l (localizedPanelLabel(\"Paint Effects\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Paint Effects\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\t$panelName = `sceneUIReplacement -getNextScriptedPanel \"scriptEditorPanel\" (localizedPanelLabel(\"Script Editor\")) `;\n\tif (\"\" == $panelName) {\n\t\tif ($useSceneConfig) {\n\t\t\t$panelName = `scriptedPanel -unParent  -type \"scriptEditorPanel\" -l (localizedPanelLabel(\"Script Editor\")) -mbv $menusOkayInPanels `;\n\t\t}\n\t} else {\n\t\t$label = `panel -q -label $panelName`;\n\t\tscriptedPanel -edit -l (localizedPanelLabel(\"Script Editor\")) -mbv $menusOkayInPanels  $panelName;\n\t\tif (!$useSceneConfig) {\n\t\t\tpanel -e -l $label $panelName;\n\t\t}\n\t}\n\n\n\tif ($useSceneConfig) {\n        string $configName = `getPanel -cwl (localizedPanelLabel(\"Current Layout\"))`;\n"
		+ "        if (\"\" != $configName) {\n\t\t\tpanelConfiguration -edit -label (localizedPanelLabel(\"Current Layout\")) \n\t\t\t\t-defaultImage \"\"\n\t\t\t\t-image \"\"\n\t\t\t\t-sc false\n\t\t\t\t-configString \"global string $gMainPane; paneLayout -e -cn \\\"single\\\" -ps 1 100 100 $gMainPane;\"\n\t\t\t\t-removeAllPanels\n\t\t\t\t-ap false\n\t\t\t\t\t(localizedPanelLabel(\"Persp View\")) \n\t\t\t\t\t\"modelPanel\"\n"
		+ "\t\t\t\t\t\"$panelName = `modelPanel -unParent -l (localizedPanelLabel(\\\"Persp View\\\")) -mbv $menusOkayInPanels `;\\n$editorName = $panelName;\\nmodelEditor -e \\n    -cam `findStartUpCamera persp` \\n    -useInteractiveMode 0\\n    -displayLights \\\"default\\\" \\n    -displayAppearance \\\"smoothShaded\\\" \\n    -activeOnly 0\\n    -ignorePanZoom 0\\n    -wireframeOnShaded 0\\n    -headsUpDisplay 1\\n    -selectionHiliteDisplay 1\\n    -useDefaultMaterial 0\\n    -bufferMode \\\"double\\\" \\n    -twoSidedLighting 1\\n    -backfaceCulling 1\\n    -xray 0\\n    -jointXray 0\\n    -activeComponentsXray 0\\n    -displayTextures 1\\n    -smoothWireframe 0\\n    -lineWidth 1\\n    -textureAnisotropic 0\\n    -textureHilight 1\\n    -textureSampling 2\\n    -textureDisplay \\\"modulate\\\" \\n    -textureMaxSize 16384\\n    -fogging 0\\n    -fogSource \\\"fragment\\\" \\n    -fogMode \\\"linear\\\" \\n    -fogStart 0\\n    -fogEnd 100\\n    -fogDensity 0.1\\n    -fogColor 0.5 0.5 0.5 1 \\n    -maxConstantTransparency 1\\n    -rendererName \\\"base_OpenGL_Renderer\\\" \\n    -colorResolution 256 256 \\n    -bumpResolution 512 512 \\n    -textureCompression 0\\n    -transparencyAlgorithm \\\"frontAndBackCull\\\" \\n    -transpInShadows 0\\n    -cullingOverride \\\"none\\\" \\n    -lowQualityLighting 0\\n    -maximumNumHardwareLights 1\\n    -occlusionCulling 0\\n    -shadingModel 0\\n    -useBaseRenderer 0\\n    -useReducedRenderer 0\\n    -smallObjectCulling 0\\n    -smallObjectThreshold -1 \\n    -interactiveDisableShadows 0\\n    -interactiveBackFaceCull 0\\n    -sortTransparent 1\\n    -nurbsCurves 1\\n    -nurbsSurfaces 1\\n    -polymeshes 1\\n    -subdivSurfaces 1\\n    -planes 1\\n    -lights 1\\n    -cameras 1\\n    -controlVertices 1\\n    -hulls 1\\n    -grid 1\\n    -joints 1\\n    -ikHandles 1\\n    -deformers 1\\n    -dynamics 1\\n    -fluids 1\\n    -hairSystems 1\\n    -follicles 1\\n    -nCloths 1\\n    -nParticles 1\\n    -nRigids 1\\n    -dynamicConstraints 1\\n    -locators 1\\n    -manipulators 1\\n    -dimensions 1\\n    -handles 1\\n    -pivots 1\\n    -textures 1\\n    -strokes 1\\n    -shadows 0\\n    $editorName;\\nmodelEditor -e -viewSelected 0 $editorName\"\n"
		+ "\t\t\t\t\t\"modelPanel -edit -l (localizedPanelLabel(\\\"Persp View\\\")) -mbv $menusOkayInPanels  $panelName;\\n$editorName = $panelName;\\nmodelEditor -e \\n    -cam `findStartUpCamera persp` \\n    -useInteractiveMode 0\\n    -displayLights \\\"default\\\" \\n    -displayAppearance \\\"smoothShaded\\\" \\n    -activeOnly 0\\n    -ignorePanZoom 0\\n    -wireframeOnShaded 0\\n    -headsUpDisplay 1\\n    -selectionHiliteDisplay 1\\n    -useDefaultMaterial 0\\n    -bufferMode \\\"double\\\" \\n    -twoSidedLighting 1\\n    -backfaceCulling 1\\n    -xray 0\\n    -jointXray 0\\n    -activeComponentsXray 0\\n    -displayTextures 1\\n    -smoothWireframe 0\\n    -lineWidth 1\\n    -textureAnisotropic 0\\n    -textureHilight 1\\n    -textureSampling 2\\n    -textureDisplay \\\"modulate\\\" \\n    -textureMaxSize 16384\\n    -fogging 0\\n    -fogSource \\\"fragment\\\" \\n    -fogMode \\\"linear\\\" \\n    -fogStart 0\\n    -fogEnd 100\\n    -fogDensity 0.1\\n    -fogColor 0.5 0.5 0.5 1 \\n    -maxConstantTransparency 1\\n    -rendererName \\\"base_OpenGL_Renderer\\\" \\n    -colorResolution 256 256 \\n    -bumpResolution 512 512 \\n    -textureCompression 0\\n    -transparencyAlgorithm \\\"frontAndBackCull\\\" \\n    -transpInShadows 0\\n    -cullingOverride \\\"none\\\" \\n    -lowQualityLighting 0\\n    -maximumNumHardwareLights 1\\n    -occlusionCulling 0\\n    -shadingModel 0\\n    -useBaseRenderer 0\\n    -useReducedRenderer 0\\n    -smallObjectCulling 0\\n    -smallObjectThreshold -1 \\n    -interactiveDisableShadows 0\\n    -interactiveBackFaceCull 0\\n    -sortTransparent 1\\n    -nurbsCurves 1\\n    -nurbsSurfaces 1\\n    -polymeshes 1\\n    -subdivSurfaces 1\\n    -planes 1\\n    -lights 1\\n    -cameras 1\\n    -controlVertices 1\\n    -hulls 1\\n    -grid 1\\n    -joints 1\\n    -ikHandles 1\\n    -deformers 1\\n    -dynamics 1\\n    -fluids 1\\n    -hairSystems 1\\n    -follicles 1\\n    -nCloths 1\\n    -nParticles 1\\n    -nRigids 1\\n    -dynamicConstraints 1\\n    -locators 1\\n    -manipulators 1\\n    -dimensions 1\\n    -handles 1\\n    -pivots 1\\n    -textures 1\\n    -strokes 1\\n    -shadows 0\\n    $editorName;\\nmodelEditor -e -viewSelected 0 $editorName\"\n"
		+ "\t\t\t\t$configName;\n\n            setNamedPanelLayout (localizedPanelLabel(\"Current Layout\"));\n        }\n\n        panelHistory -e -clear mainPanelHistory;\n        setFocus `paneLayout -q -p1 $gMainPane`;\n        sceneUIReplacement -deleteRemaining;\n        sceneUIReplacement -clear;\n\t}\n\n\ngrid -spacing 1 -size 57 -divisions 1 -displayAxes yes -displayGridLines yes -displayDivisionLines yes -displayPerspectiveLabels no -displayOrthographicLabels no -displayAxesBold yes -perspectiveLabelPosition axis -orthographicLabelPosition edge;\nviewManip -drawCompass 0 -compassAngle 0 -frontParameters \"\" -homeParameters \"\" -selectionLockParameters \"\";\n}\n");
	setAttr ".st" 3;
createNode script -n "sceneConfigurationScriptNode";
	setAttr ".b" -type "string" "playbackOptions -min 1 -max 24 -ast 1 -aet 48 ";
	setAttr ".st" 6;
createNode blinn -n "blinn1";
	setAttr ".dc" 0.79310345649719238;
createNode shadingEngine -n "blinn1SG";
	setAttr ".ihi" 0;
	setAttr -s 19 ".dsm";
	setAttr ".ro" yes;
	setAttr -s 19 ".gn";
createNode materialInfo -n "materialInfo2";
createNode file -n "file2";
	setAttr ".ftn" -type "string" "C:/Users/porfirios/Desktop/wall.jpg";
	setAttr ".ft" 0;
createNode place2dTexture -n "place2dTexture2";
createNode expression -n "expression1";
	setAttr -k on ".nds";
	setAttr ".ixp" -type "string" ".O[0]=frame";
createNode blinn -n "floor";
createNode shadingEngine -n "blinn2SG";
	setAttr ".ihi" 0;
	setAttr -s 14 ".dsm";
	setAttr ".ro" yes;
	setAttr -s 14 ".gn";
createNode materialInfo -n "materialInfo3";
createNode file -n "file3";
	setAttr ".ftn" -type "string" "C:/Users/porfirios/Desktop/floor.jpg";
createNode place2dTexture -n "place2dTexture3";
createNode groupId -n "groupId56";
	setAttr ".ihi" 0;
createNode groupId -n "groupId57";
	setAttr ".ihi" 0;
createNode groupId -n "groupId58";
	setAttr ".ihi" 0;
createNode groupId -n "groupId59";
	setAttr ".ihi" 0;
createNode groupId -n "groupId60";
	setAttr ".ihi" 0;
createNode groupId -n "groupId61";
	setAttr ".ihi" 0;
createNode groupId -n "groupId62";
	setAttr ".ihi" 0;
createNode groupId -n "groupId63";
	setAttr ".ihi" 0;
createNode groupId -n "groupId64";
	setAttr ".ihi" 0;
createNode groupId -n "groupId65";
	setAttr ".ihi" 0;
createNode groupId -n "groupId66";
	setAttr ".ihi" 0;
createNode groupId -n "groupId67";
	setAttr ".ihi" 0;
createNode groupId -n "groupId68";
	setAttr ".ihi" 0;
createNode groupId -n "groupId69";
	setAttr ".ihi" 0;
createNode groupId -n "groupId70";
	setAttr ".ihi" 0;
createNode groupId -n "groupId71";
	setAttr ".ihi" 0;
createNode groupId -n "groupId72";
	setAttr ".ihi" 0;
createNode groupId -n "groupId73";
	setAttr ".ihi" 0;
createNode groupId -n "groupId74";
	setAttr ".ihi" 0;
createNode groupId -n "groupId75";
	setAttr ".ihi" 0;
createNode groupId -n "groupId76";
	setAttr ".ihi" 0;
createNode groupId -n "groupId77";
	setAttr ".ihi" 0;
createNode groupId -n "groupId78";
	setAttr ".ihi" 0;
createNode groupId -n "groupId79";
	setAttr ".ihi" 0;
createNode groupId -n "groupId80";
	setAttr ".ihi" 0;
createNode groupId -n "groupId81";
	setAttr ".ihi" 0;
createNode groupId -n "groupId82";
	setAttr ".ihi" 0;
createNode groupId -n "groupId83";
	setAttr ".ihi" 0;
createNode groupId -n "groupId84";
	setAttr ".ihi" 0;
createNode groupId -n "groupId85";
	setAttr ".ihi" 0;
createNode groupId -n "groupId86";
	setAttr ".ihi" 0;
createNode groupId -n "groupId87";
	setAttr ".ihi" 0;
createNode groupId -n "groupId91";
	setAttr ".ihi" 0;
createNode groupId -n "groupId92";
	setAttr ".ihi" 0;
createNode groupId -n "groupId93";
	setAttr ".ihi" 0;
createNode groupId -n "groupId94";
	setAttr ".ihi" 0;
createNode groupId -n "groupId95";
	setAttr ".ihi" 0;
createNode groupId -n "groupId96";
	setAttr ".ihi" 0;
createNode groupId -n "groupId97";
	setAttr ".ihi" 0;
createNode groupId -n "groupId98";
	setAttr ".ihi" 0;
createNode groupId -n "groupId99";
	setAttr ".ihi" 0;
createNode groupId -n "groupId100";
	setAttr ".ihi" 0;
createNode groupId -n "groupId101";
	setAttr ".ihi" 0;
createNode groupId -n "groupId102";
	setAttr ".ihi" 0;
createNode groupId -n "groupId103";
	setAttr ".ihi" 0;
createNode groupId -n "groupId104";
	setAttr ".ihi" 0;
createNode groupId -n "groupId105";
	setAttr ".ihi" 0;
createNode groupId -n "groupId106";
	setAttr ".ihi" 0;
createNode groupId -n "groupId107";
	setAttr ".ihi" 0;
createNode file -n "file4";
	setAttr ".ail" yes;
	setAttr ".ftn" -type "string" "C:/Users/porfirios/Desktop/normal.jpg";
createNode place2dTexture -n "place2dTexture4";
createNode bump2d -n "bump2d1";
	setAttr ".bi" 1;
	setAttr ".vc1" -type "float3" 0 0.00076000026 0 ;
	setAttr ".vc2" -type "float3" 9.9999997e-006 9.9999997e-006 0 ;
createNode mentalrayItemsList -s -n "mentalrayItemsList";
createNode mentalrayGlobals -s -n "mentalrayGlobals";
	setAttr ".rvb" 3;
	setAttr ".ivb" no;
createNode mentalrayOptions -s -n "miDefaultOptions";
	addAttr -ci true -m -sn "stringOptions" -ln "stringOptions" -at "compound" -nc 
		3;
	addAttr -ci true -sn "name" -ln "name" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "value" -ln "value" -dt "string" -p "stringOptions";
	addAttr -ci true -sn "type" -ln "type" -dt "string" -p "stringOptions";
	setAttr ".maxr" 2;
	setAttr -s 28 ".stringOptions";
	setAttr ".stringOptions[0].name" -type "string" "rast motion factor";
	setAttr ".stringOptions[0].value" -type "string" "1.0";
	setAttr ".stringOptions[0].type" -type "string" "scalar";
	setAttr ".stringOptions[1].name" -type "string" "rast transparency depth";
	setAttr ".stringOptions[1].value" -type "string" "8";
	setAttr ".stringOptions[1].type" -type "string" "integer";
	setAttr ".stringOptions[2].name" -type "string" "rast useopacity";
	setAttr ".stringOptions[2].value" -type "string" "true";
	setAttr ".stringOptions[2].type" -type "string" "boolean";
	setAttr ".stringOptions[3].name" -type "string" "importon";
	setAttr ".stringOptions[3].value" -type "string" "false";
	setAttr ".stringOptions[3].type" -type "string" "boolean";
	setAttr ".stringOptions[4].name" -type "string" "importon density";
	setAttr ".stringOptions[4].value" -type "string" "1.0";
	setAttr ".stringOptions[4].type" -type "string" "scalar";
	setAttr ".stringOptions[5].name" -type "string" "importon merge";
	setAttr ".stringOptions[5].value" -type "string" "0.0";
	setAttr ".stringOptions[5].type" -type "string" "scalar";
	setAttr ".stringOptions[6].name" -type "string" "importon trace depth";
	setAttr ".stringOptions[6].value" -type "string" "0";
	setAttr ".stringOptions[6].type" -type "string" "integer";
	setAttr ".stringOptions[7].name" -type "string" "importon traverse";
	setAttr ".stringOptions[7].value" -type "string" "true";
	setAttr ".stringOptions[7].type" -type "string" "boolean";
	setAttr ".stringOptions[8].name" -type "string" "shadowmap pixel samples";
	setAttr ".stringOptions[8].value" -type "string" "3";
	setAttr ".stringOptions[8].type" -type "string" "integer";
	setAttr ".stringOptions[9].name" -type "string" "ambient occlusion";
	setAttr ".stringOptions[9].value" -type "string" "false";
	setAttr ".stringOptions[9].type" -type "string" "boolean";
	setAttr ".stringOptions[10].name" -type "string" "ambient occlusion rays";
	setAttr ".stringOptions[10].value" -type "string" "256";
	setAttr ".stringOptions[10].type" -type "string" "integer";
	setAttr ".stringOptions[11].name" -type "string" "ambient occlusion cache";
	setAttr ".stringOptions[11].value" -type "string" "false";
	setAttr ".stringOptions[11].type" -type "string" "boolean";
	setAttr ".stringOptions[12].name" -type "string" "ambient occlusion cache density";
	setAttr ".stringOptions[12].value" -type "string" "1.0";
	setAttr ".stringOptions[12].type" -type "string" "scalar";
	setAttr ".stringOptions[13].name" -type "string" "ambient occlusion cache points";
	setAttr ".stringOptions[13].value" -type "string" "64";
	setAttr ".stringOptions[13].type" -type "string" "integer";
	setAttr ".stringOptions[14].name" -type "string" "irradiance particles";
	setAttr ".stringOptions[14].value" -type "string" "false";
	setAttr ".stringOptions[14].type" -type "string" "boolean";
	setAttr ".stringOptions[15].name" -type "string" "irradiance particles rays";
	setAttr ".stringOptions[15].value" -type "string" "256";
	setAttr ".stringOptions[15].type" -type "string" "integer";
	setAttr ".stringOptions[16].name" -type "string" "irradiance particles interpolate";
	setAttr ".stringOptions[16].value" -type "string" "1";
	setAttr ".stringOptions[16].type" -type "string" "integer";
	setAttr ".stringOptions[17].name" -type "string" "irradiance particles interppoints";
	setAttr ".stringOptions[17].value" -type "string" "64";
	setAttr ".stringOptions[17].type" -type "string" "integer";
	setAttr ".stringOptions[18].name" -type "string" "irradiance particles indirect passes";
	setAttr ".stringOptions[18].value" -type "string" "0";
	setAttr ".stringOptions[18].type" -type "string" "integer";
	setAttr ".stringOptions[19].name" -type "string" "irradiance particles scale";
	setAttr ".stringOptions[19].value" -type "string" "1.0";
	setAttr ".stringOptions[19].type" -type "string" "scalar";
	setAttr ".stringOptions[20].name" -type "string" "irradiance particles env";
	setAttr ".stringOptions[20].value" -type "string" "true";
	setAttr ".stringOptions[20].type" -type "string" "boolean";
	setAttr ".stringOptions[21].name" -type "string" "irradiance particles env rays";
	setAttr ".stringOptions[21].value" -type "string" "256";
	setAttr ".stringOptions[21].type" -type "string" "integer";
	setAttr ".stringOptions[22].name" -type "string" "irradiance particles env scale";
	setAttr ".stringOptions[22].value" -type "string" "1";
	setAttr ".stringOptions[22].type" -type "string" "integer";
	setAttr ".stringOptions[23].name" -type "string" "irradiance particles rebuild";
	setAttr ".stringOptions[23].value" -type "string" "true";
	setAttr ".stringOptions[23].type" -type "string" "boolean";
	setAttr ".stringOptions[24].name" -type "string" "irradiance particles file";
	setAttr ".stringOptions[24].value" -type "string" "";
	setAttr ".stringOptions[24].type" -type "string" "string";
	setAttr ".stringOptions[25].name" -type "string" "geom displace motion factor";
	setAttr ".stringOptions[25].value" -type "string" "1.0";
	setAttr ".stringOptions[25].type" -type "string" "scalar";
	setAttr ".stringOptions[26].name" -type "string" "contrast all buffers";
	setAttr ".stringOptions[26].value" -type "string" "true";
	setAttr ".stringOptions[26].type" -type "string" "boolean";
	setAttr ".stringOptions[27].name" -type "string" "finalgather normal tolerance";
	setAttr ".stringOptions[27].value" -type "string" "25.842";
	setAttr ".stringOptions[27].type" -type "string" "scalar";
createNode mentalrayFramebuffer -s -n "miDefaultFramebuffer";
createNode file -n "file5";
	setAttr ".ail" yes;
	setAttr ".ftn" -type "string" "C:/Users/porfirios/Desktop/floor_norm.jpg";
	setAttr ".ft" 0;
createNode place2dTexture -n "place2dTexture5";
createNode bump2d -n "bump2d2";
	setAttr ".bi" 1;
	setAttr ".vc1" -type "float3" 0 3.9999999e-005 0 ;
	setAttr ".vc2" -type "float3" 9.9999997e-006 9.9999997e-006 0 ;
createNode groupId -n "groupId90";
	setAttr ".ihi" 0;
createNode groupId -n "groupId89";
	setAttr ".ihi" 0;
createNode groupId -n "groupId88";
	setAttr ".ihi" 0;
select -ne :time1;
	setAttr ".o" 1;
	setAttr ".unw" 1;
select -ne :renderPartition;
	setAttr -s 4 ".st";
select -ne :initialShadingGroup;
	setAttr -s 19 ".dsm";
	setAttr ".ro" yes;
	setAttr -s 19 ".gn";
select -ne :initialParticleSE;
	setAttr ".ro" yes;
select -ne :defaultShaderList1;
	setAttr -s 4 ".s";
select -ne :defaultTextureList1;
	setAttr -s 4 ".tx";
select -ne :postProcessList1;
	setAttr -s 2 ".p";
select -ne :defaultRenderUtilityList1;
	setAttr -s 6 ".u";
select -ne :renderGlobalsList1;
select -ne :defaultRenderGlobals;
	setAttr ".ren" -type "string" "mayaHardware";
select -ne :hardwareRenderGlobals;
	setAttr ".ctrs" 256;
	setAttr ".btrs" 512;
select -ne :defaultHardwareRenderGlobals;
	setAttr ".fn" -type "string" "im";
	setAttr ".res" -type "string" "ntsc_4d 646 485 1.333";
select -ne :ikSystem;
	setAttr -s 4 ".sol";
connectAttr "groupId56.id" "polySurfaceShape56.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape56.iog.og[0].gco";
connectAttr "groupId57.id" "polySurfaceShape56.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape56.iog.og[1].gco";
connectAttr "groupId58.id" "polySurfaceShape56.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape56.iog.og[2].gco";
connectAttr "groupId59.id" "polySurfaceShape57.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape57.iog.og[0].gco";
connectAttr "groupId60.id" "polySurfaceShape57.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape57.iog.og[1].gco";
connectAttr "groupId61.id" "polySurfaceShape57.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape57.iog.og[2].gco";
connectAttr "groupId62.id" "polySurfaceShape58.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape58.iog.og[0].gco";
connectAttr "groupId63.id" "polySurfaceShape58.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape58.iog.og[1].gco";
connectAttr "groupId64.id" "polySurfaceShape58.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape58.iog.og[2].gco";
connectAttr "groupId65.id" "polySurfaceShape59.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape59.iog.og[0].gco";
connectAttr "groupId66.id" "polySurfaceShape59.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape59.iog.og[1].gco";
connectAttr "groupId67.id" "polySurfaceShape59.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape59.iog.og[2].gco";
connectAttr "groupId68.id" "polySurfaceShape60.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape60.iog.og[0].gco";
connectAttr "groupId69.id" "polySurfaceShape60.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape60.iog.og[1].gco";
connectAttr "groupId70.id" "polySurfaceShape60.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape60.iog.og[2].gco";
connectAttr "groupId71.id" "polySurfaceShape61.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape61.iog.og[0].gco";
connectAttr "groupId72.id" "polySurfaceShape61.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape61.iog.og[1].gco";
connectAttr "groupId73.id" "polySurfaceShape61.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape61.iog.og[2].gco";
connectAttr "groupId74.id" "polySurfaceShape62.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape62.iog.og[0].gco";
connectAttr "groupId75.id" "polySurfaceShape62.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape62.iog.og[1].gco";
connectAttr "groupId76.id" "polySurfaceShape63.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape63.iog.og[0].gco";
connectAttr "groupId77.id" "polySurfaceShape63.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape63.iog.og[1].gco";
connectAttr "groupId78.id" "polySurfaceShape63.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape63.iog.og[2].gco";
connectAttr "groupId79.id" "polySurfaceShape64.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape64.iog.og[0].gco";
connectAttr "groupId80.id" "polySurfaceShape64.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape64.iog.og[1].gco";
connectAttr "groupId81.id" "polySurfaceShape64.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape64.iog.og[2].gco";
connectAttr "groupId82.id" "polySurfaceShape65.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape65.iog.og[0].gco";
connectAttr "groupId83.id" "polySurfaceShape65.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape65.iog.og[1].gco";
connectAttr "groupId84.id" "polySurfaceShape65.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape65.iog.og[2].gco";
connectAttr "groupId85.id" "polySurfaceShape66.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape66.iog.og[0].gco";
connectAttr "groupId86.id" "polySurfaceShape66.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape66.iog.og[1].gco";
connectAttr "groupId87.id" "polySurfaceShape66.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape66.iog.og[2].gco";
connectAttr "groupId88.id" "polySurfaceShape67.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape67.iog.og[0].gco";
connectAttr "groupId89.id" "polySurfaceShape67.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape67.iog.og[1].gco";
connectAttr "groupId90.id" "polySurfaceShape67.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape67.iog.og[2].gco";
connectAttr "groupId91.id" "polySurfaceShape68.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape68.iog.og[0].gco";
connectAttr "groupId92.id" "polySurfaceShape68.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape68.iog.og[1].gco";
connectAttr "groupId93.id" "polySurfaceShape68.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape68.iog.og[2].gco";
connectAttr "groupId94.id" "polySurfaceShape69.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape69.iog.og[0].gco";
connectAttr "groupId95.id" "polySurfaceShape69.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape69.iog.og[1].gco";
connectAttr "groupId96.id" "polySurfaceShape70.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape70.iog.og[0].gco";
connectAttr "groupId97.id" "polySurfaceShape70.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape70.iog.og[1].gco";
connectAttr "groupId98.id" "polySurfaceShape71.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape71.iog.og[0].gco";
connectAttr "groupId99.id" "polySurfaceShape71.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape71.iog.og[1].gco";
connectAttr "groupId100.id" "polySurfaceShape72.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape72.iog.og[0].gco";
connectAttr "groupId101.id" "polySurfaceShape72.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape72.iog.og[1].gco";
connectAttr "groupId102.id" "polySurfaceShape73.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape73.iog.og[0].gco";
connectAttr "groupId103.id" "polySurfaceShape73.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape73.iog.og[1].gco";
connectAttr "groupId104.id" "polySurfaceShape73.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape73.iog.og[2].gco";
connectAttr "groupId105.id" "polySurfaceShape74.iog.og[0].gid";
connectAttr ":initialShadingGroup.mwc" "polySurfaceShape74.iog.og[0].gco";
connectAttr "groupId106.id" "polySurfaceShape74.iog.og[1].gid";
connectAttr "blinn1SG.mwc" "polySurfaceShape74.iog.og[1].gco";
connectAttr "groupId107.id" "polySurfaceShape74.iog.og[2].gid";
connectAttr "blinn2SG.mwc" "polySurfaceShape74.iog.og[2].gco";
relationship "link" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "blinn1SG.message" ":defaultLightSet.message";
relationship "link" ":lightLinker1" "blinn2SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialShadingGroup.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" ":initialParticleSE.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "blinn1SG.message" ":defaultLightSet.message";
relationship "shadowLink" ":lightLinker1" "blinn2SG.message" ":defaultLightSet.message";
connectAttr "layerManager.dli[0]" "defaultLayer.id";
connectAttr "renderLayerManager.rlmi[0]" "defaultRenderLayer.rlid";
connectAttr "file2.oc" "blinn1.c";
connectAttr "bump2d1.o" "blinn1.n";
connectAttr "blinn1.oc" "blinn1SG.ss";
connectAttr "groupId57.msg" "blinn1SG.gn" -na;
connectAttr "groupId60.msg" "blinn1SG.gn" -na;
connectAttr "groupId63.msg" "blinn1SG.gn" -na;
connectAttr "groupId66.msg" "blinn1SG.gn" -na;
connectAttr "groupId69.msg" "blinn1SG.gn" -na;
connectAttr "groupId72.msg" "blinn1SG.gn" -na;
connectAttr "groupId75.msg" "blinn1SG.gn" -na;
connectAttr "groupId77.msg" "blinn1SG.gn" -na;
connectAttr "groupId80.msg" "blinn1SG.gn" -na;
connectAttr "groupId83.msg" "blinn1SG.gn" -na;
connectAttr "groupId86.msg" "blinn1SG.gn" -na;
connectAttr "groupId89.msg" "blinn1SG.gn" -na;
connectAttr "groupId92.msg" "blinn1SG.gn" -na;
connectAttr "groupId95.msg" "blinn1SG.gn" -na;
connectAttr "groupId97.msg" "blinn1SG.gn" -na;
connectAttr "groupId99.msg" "blinn1SG.gn" -na;
connectAttr "groupId101.msg" "blinn1SG.gn" -na;
connectAttr "groupId103.msg" "blinn1SG.gn" -na;
connectAttr "groupId106.msg" "blinn1SG.gn" -na;
connectAttr "polySurfaceShape56.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape57.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape58.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape59.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape60.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape61.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape62.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape63.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape64.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape65.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape66.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape67.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape68.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape69.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape70.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape71.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape72.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape73.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "polySurfaceShape74.iog.og[1]" "blinn1SG.dsm" -na;
connectAttr "blinn1SG.msg" "materialInfo2.sg";
connectAttr "blinn1.msg" "materialInfo2.m";
connectAttr "file2.msg" "materialInfo2.t" -na;
connectAttr "place2dTexture2.c" "file2.c";
connectAttr "place2dTexture2.tf" "file2.tf";
connectAttr "place2dTexture2.rf" "file2.rf";
connectAttr "place2dTexture2.mu" "file2.mu";
connectAttr "place2dTexture2.mv" "file2.mv";
connectAttr "place2dTexture2.s" "file2.s";
connectAttr "place2dTexture2.wu" "file2.wu";
connectAttr "place2dTexture2.wv" "file2.wv";
connectAttr "place2dTexture2.re" "file2.re";
connectAttr "place2dTexture2.of" "file2.of";
connectAttr "place2dTexture2.r" "file2.ro";
connectAttr "place2dTexture2.n" "file2.n";
connectAttr "place2dTexture2.vt1" "file2.vt1";
connectAttr "place2dTexture2.vt2" "file2.vt2";
connectAttr "place2dTexture2.vt3" "file2.vt3";
connectAttr "place2dTexture2.vc1" "file2.vc1";
connectAttr "place2dTexture2.o" "file2.uv";
connectAttr "place2dTexture2.ofs" "file2.fs";
connectAttr "expression1.out[0]" "file2.fe";
connectAttr ":time1.o" "expression1.tim";
connectAttr "file3.oc" "floor.c";
connectAttr "bump2d2.o" "floor.n";
connectAttr "floor.oc" "blinn2SG.ss";
connectAttr "groupId58.msg" "blinn2SG.gn" -na;
connectAttr "groupId61.msg" "blinn2SG.gn" -na;
connectAttr "groupId64.msg" "blinn2SG.gn" -na;
connectAttr "groupId67.msg" "blinn2SG.gn" -na;
connectAttr "groupId70.msg" "blinn2SG.gn" -na;
connectAttr "groupId73.msg" "blinn2SG.gn" -na;
connectAttr "groupId78.msg" "blinn2SG.gn" -na;
connectAttr "groupId81.msg" "blinn2SG.gn" -na;
connectAttr "groupId84.msg" "blinn2SG.gn" -na;
connectAttr "groupId87.msg" "blinn2SG.gn" -na;
connectAttr "groupId90.msg" "blinn2SG.gn" -na;
connectAttr "groupId93.msg" "blinn2SG.gn" -na;
connectAttr "groupId104.msg" "blinn2SG.gn" -na;
connectAttr "groupId107.msg" "blinn2SG.gn" -na;
connectAttr "polySurfaceShape56.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape57.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape58.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape59.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape60.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape61.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape63.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape64.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape65.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape66.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape67.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape68.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape73.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "polySurfaceShape74.iog.og[2]" "blinn2SG.dsm" -na;
connectAttr "blinn2SG.msg" "materialInfo3.sg";
connectAttr "floor.msg" "materialInfo3.m";
connectAttr "file3.msg" "materialInfo3.t" -na;
connectAttr "place2dTexture3.c" "file3.c";
connectAttr "place2dTexture3.tf" "file3.tf";
connectAttr "place2dTexture3.rf" "file3.rf";
connectAttr "place2dTexture3.mu" "file3.mu";
connectAttr "place2dTexture3.mv" "file3.mv";
connectAttr "place2dTexture3.s" "file3.s";
connectAttr "place2dTexture3.wu" "file3.wu";
connectAttr "place2dTexture3.wv" "file3.wv";
connectAttr "place2dTexture3.re" "file3.re";
connectAttr "place2dTexture3.of" "file3.of";
connectAttr "place2dTexture3.r" "file3.ro";
connectAttr "place2dTexture3.n" "file3.n";
connectAttr "place2dTexture3.vt1" "file3.vt1";
connectAttr "place2dTexture3.vt2" "file3.vt2";
connectAttr "place2dTexture3.vt3" "file3.vt3";
connectAttr "place2dTexture3.vc1" "file3.vc1";
connectAttr "place2dTexture3.o" "file3.uv";
connectAttr "place2dTexture3.ofs" "file3.fs";
connectAttr "place2dTexture4.c" "file4.c";
connectAttr "place2dTexture4.tf" "file4.tf";
connectAttr "place2dTexture4.rf" "file4.rf";
connectAttr "place2dTexture4.mu" "file4.mu";
connectAttr "place2dTexture4.mv" "file4.mv";
connectAttr "place2dTexture4.s" "file4.s";
connectAttr "place2dTexture4.wu" "file4.wu";
connectAttr "place2dTexture4.wv" "file4.wv";
connectAttr "place2dTexture4.re" "file4.re";
connectAttr "place2dTexture4.of" "file4.of";
connectAttr "place2dTexture4.r" "file4.ro";
connectAttr "place2dTexture4.n" "file4.n";
connectAttr "place2dTexture4.vt1" "file4.vt1";
connectAttr "place2dTexture4.vt2" "file4.vt2";
connectAttr "place2dTexture4.vt3" "file4.vt3";
connectAttr "place2dTexture4.vc1" "file4.vc1";
connectAttr "place2dTexture4.o" "file4.uv";
connectAttr "place2dTexture4.ofs" "file4.fs";
connectAttr "file4.oa" "bump2d1.bv";
connectAttr ":mentalrayGlobals.msg" ":mentalrayItemsList.glb";
connectAttr ":miDefaultOptions.msg" ":mentalrayItemsList.opt" -na;
connectAttr ":miDefaultFramebuffer.msg" ":mentalrayItemsList.fb" -na;
connectAttr ":miDefaultOptions.msg" ":mentalrayGlobals.opt";
connectAttr ":miDefaultFramebuffer.msg" ":mentalrayGlobals.fb";
connectAttr "place2dTexture5.c" "file5.c";
connectAttr "place2dTexture5.tf" "file5.tf";
connectAttr "place2dTexture5.rf" "file5.rf";
connectAttr "place2dTexture5.mu" "file5.mu";
connectAttr "place2dTexture5.mv" "file5.mv";
connectAttr "place2dTexture5.s" "file5.s";
connectAttr "place2dTexture5.wu" "file5.wu";
connectAttr "place2dTexture5.wv" "file5.wv";
connectAttr "place2dTexture5.re" "file5.re";
connectAttr "place2dTexture5.of" "file5.of";
connectAttr "place2dTexture5.r" "file5.ro";
connectAttr "place2dTexture5.n" "file5.n";
connectAttr "place2dTexture5.vt1" "file5.vt1";
connectAttr "place2dTexture5.vt2" "file5.vt2";
connectAttr "place2dTexture5.vt3" "file5.vt3";
connectAttr "place2dTexture5.vc1" "file5.vc1";
connectAttr "place2dTexture5.o" "file5.uv";
connectAttr "place2dTexture5.ofs" "file5.fs";
connectAttr "file5.oa" "bump2d2.bv";
connectAttr "blinn1SG.pa" ":renderPartition.st" -na;
connectAttr "blinn2SG.pa" ":renderPartition.st" -na;
connectAttr "polySurfaceShape56.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape57.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape58.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape59.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape60.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape61.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape62.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape63.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape64.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape65.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape66.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape67.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape68.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape69.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape70.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape71.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape72.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape73.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "polySurfaceShape74.iog.og[0]" ":initialShadingGroup.dsm" -na;
connectAttr "groupId56.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId59.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId62.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId65.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId68.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId71.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId74.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId76.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId79.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId82.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId85.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId88.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId91.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId94.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId96.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId98.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId100.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId102.msg" ":initialShadingGroup.gn" -na;
connectAttr "groupId105.msg" ":initialShadingGroup.gn" -na;
connectAttr "blinn1.msg" ":defaultShaderList1.s" -na;
connectAttr "floor.msg" ":defaultShaderList1.s" -na;
connectAttr "file2.msg" ":defaultTextureList1.tx" -na;
connectAttr "file3.msg" ":defaultTextureList1.tx" -na;
connectAttr "file4.msg" ":defaultTextureList1.tx" -na;
connectAttr "file5.msg" ":defaultTextureList1.tx" -na;
connectAttr "place2dTexture2.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture3.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture4.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "bump2d1.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "place2dTexture5.msg" ":defaultRenderUtilityList1.u" -na;
connectAttr "bump2d2.msg" ":defaultRenderUtilityList1.u" -na;
// End of level_corridors.ma
