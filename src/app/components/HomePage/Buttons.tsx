interface ButtonProps {
    button: string;
    ref: string;
    content: string;
    img?: string;
}

export default function Button({button, ref, content, img}: ButtonProps) {
    return (
        <a
            href={ref}
            className={`${button} btn btn-primary`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </a>
    );
}