import baseLoadable from '@loadable/component';

const loadable = (func: any): any => {
    return baseLoadable(func, { fallback: <div>Loading...</div> });
};

export default loadable;
