import { defineStore } from 'pinia'
//页面设置信息
const useTabsViewStore = defineStore(
    'tabsView',
    {
        state: () => ({
            visitedViews: [], // tab中打开的路由
            cachedViews: [] // 需要缓存的路由，只会在开启tabsView时候才会记录
        }),
        persist: false,
        actions: {
            // 添加view （包含huncunde）
            addView(view) {
                this.addVisitedView(view);
                this.addCachedView(view);
            },
            // 添加view
            addVisitedView(view) {
                if (this.visitedViews.some(v => v.path === view.path)) return;
                this.visitedViews.push(
                    Object.assign({}, view, {
                        title: view.meta.title || "未命名"
                    })
                );
            },
            // 添加缓存的view
            addCachedView(view) {
                if (this.cachedViews.includes(view.name)) return;
                // 设置为noCache=true时候会过滤掉
                if (!view.meta.noCache) {
                    this.cachedViews.push(view.name);
                }
            },
            // 删除view（包含缓存的view）
            delView(view) {
                return new Promise(resolve => {
                    this.delVisitedView(view);
                    this.delCachedView(view);
                    resolve({
                        visitedViews: [...this.visitedViews],
                        cachedViews: [...this.cachedViews]
                    });
                });
            },
            // 删除view
            delVisitedView(view) {
                return new Promise(resolve => {
                    for (const [i, v] of this.visitedViews.entries()) {
                        if (v.path === view.path) {
                            this.visitedViews.splice(i, 1);
                            break;
                        }
                    }
                    resolve([...this.visitedViews]);
                });
            },
            // 删除缓存view
            delCachedView(view) {
                return new Promise(resolve => {
                    const index = this.cachedViews.indexOf(view.name);
                    index > -1 && this.cachedViews.splice(index, 1);
                    resolve([...this.cachedViews]);
                });
            },
            // 删除其他views
            delOthersViews(view) {
                return new Promise(resolve => {
                    this.delOthersVisitedViews(view);
                    this.delOthersCachedViews(view);
                    resolve({
                        visitedViews: [...this.visitedViews],
                        cachedViews: [...this.cachedViews]
                    });
                });
            },
            // 删除其他views
            delOthersVisitedViews(view) {
                return new Promise(resolve => {
                    this.visitedViews = this.visitedViews.filter(v => {
                        return v.meta.affix || v.path === view.path;
                    });
                    resolve([...this.visitedViews]);
                });
            },
            // 删除其他缓存的views
            delOthersCachedViews(view) {
                return new Promise(resolve => {
                    const index = this.cachedViews.indexOf(view.name);
                    if (index > -1) {
                        this.cachedViews = this.cachedViews.slice(index, index + 1);
                    } else {
                        this.cachedViews = [];
                    }
                    resolve([...this.cachedViews]);
                });
            },
            // 删除所有views（包含缓存的）
            delAllViews() {
                return new Promise(resolve => {
                    this.delAllVisitedViews();
                    this.delAllCachedViews()
                    resolve({
                        visitedViews: [...this.visitedViews],
                        cachedViews: [...this.cachedViews]
                    });
                });
            },
            // 删除所有views
            delAllVisitedViews() {
                return new Promise(resolve => {
                    const affixTabs = this.visitedViews.filter(tab => tab.meta.affix);
                    this.visitedViews = affixTabs;
                    resolve([...this.visitedViews]);
                });
            },
            // 删除所有缓存views
            delAllCachedViews() {
                return new Promise(resolve => {
                    this.cachedViews = [];
                    resolve([...this.cachedViews]);
                });
            },
            // 更新view
            updateVisitedView(view) {
                for (let v of this.visitedViews) {
                    if (v.path === view.path) {
                        v = Object.assign(v, view);
                        break;
                    }
                }
            },
            // 更新views的排序
            updateSortVisitedViews(views) {
                this.visitedViews = views;
            },
            // 删除右侧views
            delRightViews(view) {
                return new Promise(resolve => {
                    const index = this.visitedViews.findIndex(v => v.path === view.path);
                    if (index === -1) {
                        return;
                    }
                    this.visitedViews = this.visitedViews.filter((item, idx) => {
                        if (idx <= index || (item.meta && item.meta.affix)) {
                            return true;
                        }
                        const i = this.cachedViews.indexOf(item.name);
                        if (i > -1) {
                            this.cachedViews.splice(i, 1);
                        }
                        return false;
                    });
                    resolve([...this.visitedViews]);
                });
            },
            // 删除左侧views
            delLeftViews(view) {
                return new Promise(resolve => {
                    const index = this.visitedViews.findIndex(v => v.path === view.path);
                    if (index === -1) {
                        return;
                    }
                    this.visitedViews = this.visitedViews.filter((item, idx) => {
                        if (idx >= index || (item.meta && item.meta.affix)) {
                            return true;
                        }
                        const i = this.cachedViews.indexOf(item.name);
                        if (i > -1) {
                            this.cachedViews.splice(i, 1);
                        }
                        return false;
                    });
                    resolve([...this.visitedViews]);
                });
            }
        }
    })

export default useTabsViewStore




