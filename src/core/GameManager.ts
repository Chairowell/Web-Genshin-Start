import { EventEmitter, MathUtils } from "../libs/xviewer";

class TaskManager {
    private _taskCount: number = 0;
    private _taskFinished: number = 0;
    private _resolve: Promise<void> = Promise.resolve();
    private _progress: number = 0;

    public get progress() {
        return this._progress;
    }

    public task(handle: Function | Promise<any>, { name = "", weight = 1 } = {}) {
        this._regist(weight);
        return this._resolve
            .then(() => typeof handle === "function" ? handle() : handle)
            .then(() => this._finish(weight, name))
            .catch(err => {
                this._finish(weight, name);
                console.error(err);
            });
    }

    public reset() {
        this._taskCount = 0;
        this._taskFinished = 0;
        this._progress = 0;
    }

    private _finish(w: number, name: string) {
        this._taskFinished += w;
        this._progress = MathUtils.clamp01(Math.max(this._progress, this._taskFinished / this._taskCount))
    }

    private _regist(w: number) {
        this._taskCount = Math.max(1, this._taskCount + w);
    }
}

class GameManager extends EventEmitter {
    public taskManger: TaskManager = new TaskManager();
    public restartCount: number = 0;

    public reset() {
        this.clear();
        this.taskManger.reset();
        this.taskManger = new TaskManager();
    }

    public get progress() {
        return this.taskManger.progress;
    }

    public restart() {

        const urlParams = new URLSearchParams(window.location.search);
        const startParam = urlParams.get("start");
        if (startParam !== null) {
            if (confirm(`注意：\n你即将跳转到不属于本站的未知网页 https://${startParam} \n\n宇宙安全免责声明：\n你即将访问的网页和本站没有任何关联，\n也与《原神》或其母公司miHoYo没有任何关联，\n请自行甄别，本站不承担任何直接或间接的后果！！！\n\n “确定”继续访问，“取消”跳回主页`)) {
                window.location.href = `https://${startParam}`
            } else {
                location.reload();
            }
        } else {
            window.location.href = 'https://github.com/Chairowell/web-genshin-start'
        }
        
        // location.reload();
        // window.location.href = 'https://www.bilibili.com/video/BV1E8411v7xy'
    }
    public task(handle: Function | Promise<any>, props = {}) {
        return this.taskManger.task(handle, props);
    }
}

export const gameManager = new GameManager();
