import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { ICONS_MAP } from '../../../core/tokens';
import { IconsMap } from '../../models/icons.model';
import { ButtonType } from '../../enums/button-types.enum';

@Component({
  selector: 'app-button',
  imports: [],
  providers: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  constructor(@Inject(ICONS_MAP) public iconsMap: IconsMap) {}

  btnType = ButtonType

  @Input() buttonType: ButtonType = this.btnType.flat

  @Input() buttonClass!: string

  @Input() icon!: keyof typeof this.iconsMap

  @Input() size!: number

  @Input() isDisabled: boolean = false

}
