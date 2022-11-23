class Matrix3 {
    elements: Float32Array;

    constructor(){
        this.elements = new Float32Array(9);
        this.identity();
    }

    set (n11: number, n12: number, n13:number,
         n21: number, n22: number, n23: number,
         n31: number, n32: number, n33: number): Matrix3 {
        let te = this.elements;
        te[0] = n11; te[3] = n12; te[6] = n13;
        te[1] = n21; te[4] = n22; te[7] = n23;
        te[2] = n31; te[5] = n32; te[8] = n33;
        return this;
    }

    // Установить матрицу в единичную матрицу
    identity(): Matrix3 {
        this.set(1, 0, 0,
                 0, 1, 0,
                 0, 0, 1);
        return this;
    }
}

export {Matrix3};