import { Builder } from "../interfaces/builder";

export class Director {
    buildWoodHouse(builder: Builder) {
        builder.reset();
        builder.setBasement();
        builder.setWalls();
        builder.setWindows();
        builder.setRoof();
        builder.addCarpet();
        builder.paintWalls();
        return builder.getResult();
    }

    buildBrickHouse(builder: Builder) {
        builder.reset();
        builder.setBasement();
        builder.setWalls();
        builder.setRoof();
        builder.setWindows();
        builder.addCarpet();
        builder.paintWalls();
        builder.setFence();
        return builder.getResult();
    }
}