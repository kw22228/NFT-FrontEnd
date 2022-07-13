const importAll = (r: any) => {
    let images: string[] = [];
    r.keys().forEach((item: string, index: number) => {
        images.push(r(item));
    });

    return images;
};

export default importAll;
