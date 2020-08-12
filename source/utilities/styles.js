const visible = 'visible', hidden = 'hidden';

export const show = element => element.style.visibility = visible;

export const hide = element => element.style.visibility = hidden;

export const shown = element => element.style.visibility == visible;

export const toggleVisibility = element => shown(element) ? hide(element) : show(element);