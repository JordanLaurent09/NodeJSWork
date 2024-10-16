class Machine {
    constructor(os, totalSpace, freeSpace, unfreeSpace, processor) {
        this.os = os;
        this.totalSpace = totalSpace;
        this.freeSpace = freeSpace;
        this.unfreeSpace = unfreeSpace;
        this.processor = processor;
    }
}

module.exports = Machine;