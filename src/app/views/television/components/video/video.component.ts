import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild('youtube') youtube!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;
  @Input() videoId = "";

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.size();
    window.addEventListener('resize', this.size);
  }

  size = (): void => {
    // 1200px x 720px
    this.videoWidth = Math.min(this.youtube.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.size);
  }
}