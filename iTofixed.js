const iTofixed = (num, digits) => {
    /**
     * 小数保留固定位数
     */
    const dotIndex = num.toString().indexOf('.');
    const times = 10 ** digits;

    if (dotIndex > -1) {
        const head = num.toString().substr(0, dotIndex + digits + 1);
        const neck = num.toString().substr(dotIndex + digits + 1, 1);

        if (neck && neck > 4) {
            return (Math.round((head * times) + 1) / times).toString();
        }
        return head;
    }
    return num;
};

export default iTofixed;
