import 'fileapi';
import { EventEmitter, ElementRef } from '@angular/core';
export interface Options {
    readAs?: string;
}
export declare class FileDropDirective {
    fileOver: EventEmitter<boolean>;
    onFileDrop: EventEmitter<File>;
    options: Options;
    private element;
    constructor(element: ElementRef);
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
    private readFile;
    private emitFileOver;
    private emitFileDrop;
    private pickStrategy;
    private hasStrategy;
    private getDataTransfer;
    private preventAndStop;
    private haveFiles;
}
