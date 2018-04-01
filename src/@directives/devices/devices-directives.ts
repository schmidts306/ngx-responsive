/**
 * @name devices.directives
 * @description Devices directives in ngx-responsive
 *
 * @license MIT
 */
import { Output, EventEmitter, Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { RESPONSIVE_BASE, ResponsiveState } from '../../@core';

@Directive({
    selector: '[isSmartTv]'
})
export class IsSmartTvDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'smarttv';
    protected _showWhenTrue = true;

    @Input() set isSmartTv( grid_state: string[]|string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef
               ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isDesktop]'
})
export class IsDesktopDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'desktop';
    protected _showWhenTrue = true;

    @Input() set isDesktop( grid_state: string[] | string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isTablet]'
})
export class IsTabletDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'tablet';
    protected _showWhenTrue = true;

    @Input() set isTablet( grid_state: string[] | string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[isMobile]'
})
export class IsMobileDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'mobile';
    protected _showWhenTrue = true;

    @Input() set isMobile( grid_state: string[] | string ) {
        this.setGrid( this._state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[showItDevice]'
})
export class ShowItDeviceDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    @Input() set showItDevice( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive({
    selector: '[hideItDevice]'
})
export class HideItDeviceDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    @Input() set hideItDevice( grid_state: string[] | string )
    {
        this.setGrid( grid_state, 'device' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[isIphone]'
})
export class IsIphoneDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'iphone';
    protected _showWhenTrue = true;

    @Input() set isIphone( grid_state: string[]|string ) {
        this.setGrid(this._state, 'standard');
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[isIpad]'
})
export class IsIpadDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'iphone';
    protected _showWhenTrue = true;

    @Input() set isIphone(grid_state: string[] | string ) {
        this.setGrid( this._state, 'standard' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[isAndroidMobile]'
})
export class IsAndroidMobileDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'android mobile';
    protected _showWhenTrue = true;

    @Input() set isAndroidMobile( grid_state: string[] | string ) {
        this.setGrid(this._state, 'standard');
    }

    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[isAndroidTablet]'
})
export class IsAndroidTabletDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'android tablet';
    protected _showWhenTrue = true;

    @Input() set isAndroidTablet( grid_state: string[] | string ) {
        this.setGrid( this._state, 'standard' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}


@Directive(
{
    selector: '[isWindowsPhone]'
})
export class IsWindowsPhoneDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'windows phone';
    protected _showWhenTrue = true;

    @Input() set isWindowsPhone(grid_state: string[]|string) {
        this.setGrid( this._state, 'standard' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}


@Directive(
{
    selector: '[showItStandard]'
})
export class ShowItStandardDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = true;

    @Input() set showItStandard( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'standard' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[hideItStandard]'
})
export class HideItStandardDirective extends RESPONSIVE_BASE<any> {

    protected _showWhenTrue = false;

    @Input() set hideItStandard( grid_state: string[] | string ) {
        this.setGrid( grid_state, 'standard' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[isPortrait]'
})
export class IsPortraitDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'portrait';
    protected _showWhenTrue = false;

    @Input() set isPortrait( grid_state: string ) {
        this.setGrid( this._state, 'orientation' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}

@Directive(
{
    selector: '[isLandscape]'
})
export class IsLandscapeDirective extends RESPONSIVE_BASE<any> {

    protected _state = 'landscape';
    protected _showWhenTrue = false;

    @Input() set isLandscape( grid_state: string ) {
        this.setGrid( this._state, 'orientation' );
    }
    constructor( templateRef: TemplateRef<any>,
                 viewContainer: ViewContainerRef,
                 _responsiveState: ResponsiveState,
                 cd: ChangeDetectorRef ) {
        super( templateRef, viewContainer, _responsiveState, cd );
    }
}