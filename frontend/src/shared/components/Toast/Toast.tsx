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
            className="toast"
            role="status"
            aria-live="polite"
            aria-labelledby="toast-title"
            aria-describedby="toast-message"
        >
            <div className="toast-content">
                <div className="toast__heading">
                    <strong
                        className="toast__title"
                        id="toast-title"
                    >
                        { title }
                    </strong>

                    <button
                        className="toast__close"
                        type="button"
                        aria-label="Close notification"
                    >
                        &times;
                    </button>
                </div>

                <p
                    className="toast__message"
                    id="toast-message"
                >
                    { content }
                </p>
            </div>
        </div>
    );
};