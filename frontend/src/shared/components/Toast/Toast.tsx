import type { ToastProps } from './Toast.types.ts';
import { Button } from '../ui/Button/Button.tsx';
import Style from './Toast.module.css';

export function Toast({
    title = "Notification",
    content = "Hello World",
    variant = "default",
    durationTime = 3
}: ToastProps) { 
    return (
        <div
            className={Style.toast}
            role="status"
            aria-live="polite"
            aria-labelledby="toast-title"
            aria-describedby="toast-message"
        >
            <div className={Style.content}>
                <div className={Style.heading}>
                    <strong
                        className={Style.title}
                        id="toast-title"
                    >
                        { title }
                    </strong>

                    <Button
                        children="&times;"
                        variant="ghost"
                        size="md"
                        className={Style.closeButton}
                    />
                </div>

                <p
                    className={Style.message}
                    id="toast-message"
                >
                    { content }
                </p>
            </div>
        </div>
    );
};