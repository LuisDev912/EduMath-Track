import type { ToastProps } from './Toast.types.ts';
import { Button } from '../ui/Button/Button.tsx';
import Style from './Toast.module.css';

export function Toast({
    title = "Notification",
    content = "Hello World",
    variant = "default",
    onClose
}: ToastProps) {
    const combinedClasses = `${Style.toast} ${Style[variant]}`.trim();

    return (
        <div
            className={combinedClasses}
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
                        onClick={onClose}
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