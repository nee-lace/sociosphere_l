import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.9}
      overlayBlur={6}
      size="40%"
      onClose={() => setModalOpened(false)}
    >

    <FollowersCard location='modal'/>
    </Modal>
  );
};

export default FollowersModal;
