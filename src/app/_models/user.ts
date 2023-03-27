import { Type, plainToClass } from 'class-transformer';
import "reflect-metadata";

export class User {
    username!: string;
    @Type(() => Map<string, number>)
    lastVisited: Map<string, number>;
    @Type(() => Map<string, number>)
    timeAlreadySpent: Map<string, number>;
    activePage: string = "";

    constructor(username: string) {
        this.username = username;
        this.lastVisited = new Map<string, number>();
        this.timeAlreadySpent = new Map<string, number>();
    }

    public updateLastPage() : void {
        // Handles the case where the user logs in (last page is handled in logout function)
        if (this.activePage === "")
            return;

        if (this.timeAlreadySpent.has(this.activePage)) {
            this.timeAlreadySpent.set(this.activePage, this.timeAlreadySpent.get(this.activePage)! + this.timeSpentInLastVisit(this.activePage));
        }
        else {
            this.timeAlreadySpent.set(this.activePage, this.timeSpentInLastVisit(this.activePage));
        }
    }

    public setActivePage(page: string) : void {
        this.updateLastPage();
        this.activePage = page;
        const now = new Date();
        this.lastVisited.set(page, now.valueOf());
    }

    public login() : void {
        this.activePage = "";
    }

    public logout() : void {
        this.updateLastPage();
        this.activePage = "";
    }

    private timeSpentInLastVisit(page: string): number {
        // This applies only to the current page, we're calculating the time spent in the last (current) visit
        let now = new Date(); 
        if (this.lastVisited.has(page))
            return now.valueOf() - (this.lastVisited.get(page))!;
        else {
            this.lastVisited.set(page, now.valueOf());
            return 0;
        }
    }

    private timeSpentOnPage(page: string) {
        return (this.timeAlreadySpent.has(page) ? this.timeAlreadySpent.get(page)! : 0) + Number(this.activePage == page) * this.timeSpentInLastVisit(page);
    }

    public timeSpentOnPageToString(page : string) {
        // Convert the difference in miliseconds to h:m:s format
        let diff = this.timeSpentOnPage(page);
        diff = Math.floor(diff / 1000);
        let s = diff % 60;
        diff = Math.floor(diff / 60);
        let m = diff % 60;
        diff = Math.floor(diff / 60);
        let h = diff % 24;
        diff = Math.floor(diff / 24);
        return `${h}h ${m}m ${s}s`;
    }


}