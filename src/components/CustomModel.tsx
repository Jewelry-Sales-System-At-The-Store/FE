import { Modal } from 'antd';
interface StatusModelProps {
    open: boolean;
    body: React.ReactNode;
}

const StatusModel = ({ open, body }: StatusModelProps) => {
    return (
        <Modal
            width={300}
            style={{ padding: 0 }}
            closable={false}
            footer={false}
            open={open}
            styles={{
                content: {
                    padding: 0,
                },
            }}
            className="min-w-fit"
        >
            {body}
        </Modal>
    );
};

export default StatusModel;
