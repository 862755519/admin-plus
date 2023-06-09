import { unref, shallowRef } from "vue"
export default class waterMarkClass {
    constructor() {
        this.domElement = null;
        this.id = null,
        this.watermarkEl = shallowRef(null)
    }
    //绘制文字背景图
    createBase64(str, attr) {
        const can = document.createElement("canvas");
        const width = 200;
        const height = 140;
        Object.assign(can, { width, height });

        const cans = can.getContext("2d");
        if (cans) {
            cans.rotate((-20 * Math.PI) / 120);
            cans.font = attr?.font ?? "20px Reggae One";
            cans.fillStyle = attr?.fillStyle ?? "#99999945";
            cans.textAlign = "left";
            cans.textBaseline = "middle";
            cans.fillText(str, width / 20, height);
        }
        return can.toDataURL("image/png");
    }
    //绘制水印层
    createWatermark = (str, attr) => {
        if (unref(this.watermarkEl)) {
            this.updateWatermark({ str, attr });
            return this.id;
        }
        const div = document.createElement("div");
        this.watermarkEl.value = div;
        div.id = this.id;
        div.style.pointerEvents = "none";
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.position = "absolute";
        div.style.zIndex = "100000";
        const el = unref(this.domElement);
        if (!el) return this.id;
        const { clientHeight: height, clientWidth: width } = el;
        this.updateWatermark({ str, width, height, attr });
        el.appendChild(div);
        return this.id;
    };
    //更新水印层
    updateWatermark(options) {
        const el = unref(this.watermarkEl);
        if (!el) return;
        if (options.width !== "undefined") {
            el.style.width = `${options.width}px`;
        }
        if (options.height !== "undefined") {
            el.style.height = `${options.height}px`;
        }
        if (options.str !== "undefined") {
            el.style.background = `url(${this.createBase64(
                options.str,
                options.attr
            )}) left top repeat`;
        }
    }
    //设置水印
    setWaterMark(domElement,str, attr) {
        this.domElement = domElement;
        this.createWatermark(str, attr);
    }
    //清除水印
    clearWatermark = () => {
        const domId = unref(this.watermarkEl);
        this.watermarkEl.value = undefined;
        const el = unref(this.domElement);
        if (!el) return;
        domId && el.removeChild(domId);
    };
}

