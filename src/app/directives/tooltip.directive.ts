import { ApplicationRef, ComponentRef, createComponent, Directive, ElementRef, HostListener, Injector, Input } from "@angular/core";
import { TooltipComponent } from "../components/tooltip/tooltip.component";

@Directive({ selector: "[tooltip]" })
export class TooltipDirective
{
  @Input() tooltip = "";

  private componentRef?: ComponentRef<any>;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  @HostListener("mouseenter")
  private onMouseEnter()
  {
    if (!this.componentRef)
    {
      this.componentRef = createComponent(
        TooltipComponent,
        {
          environmentInjector: this.appRef.injector,
          elementInjector: this.injector
        }
      );

      this.appRef.attachView(this.componentRef.hostView);

      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);

      this.setTooltipComponentProperties();
    }
  }

  @HostListener("mouseleave")
  private onMouseLeave()
  {
    this.destroy();
  }

  /**
   * Set tooltip value and position.
   */
  private setTooltipComponentProperties()
  {
    if (!!this.componentRef)
    {
      this.componentRef.instance.tooltip = this.tooltip;

      const { right, top, bottom, width } = this.elementRef.nativeElement.getBoundingClientRect();

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Set X
      if (windowWidth - right < 50) this.componentRef.instance.right = windowWidth - right + width + 10;
      else this.componentRef.instance.left = right + 10;

      // Set Y
      if (windowHeight - bottom < 32) this.componentRef.instance.bottom = windowHeight - bottom;
      else this.componentRef.instance.top = top;
    }
  }

  private destroy()
  {
    if (!!this.componentRef)
    {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = undefined;
    }
  }
}