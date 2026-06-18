import{a7 as t}from"./iframe-DK-3qaH3.js";import{S as b}from"./ArrowRedo-CUZojLrH.js";import{S as v}from"./EyeClosed-D7-fifN1.js";import{S as I}from"./Archive-BmVCa9zu.js";import{S as k}from"./Trash-CT5ztRaN.js";import{S as w}from"./ClockDashed-D49TlzQC.js";import{C as i}from"./ContextMenu-DSn14Iqq.js";import{i as l}from"./inboxSearchResults-BZYsupgJ.js";import{S as u}from"./TeddyBear-BpzfsVyh.js";import{L as x}from"./List-DMs9eogo.js";import{D as d}from"./DialogListItem-CXWo9q3A.js";import{L as g}from"./ListItem-DtUr0D4a.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CvLgPp7R.js";import"./Dropdown-PqayCWXB.js";import"./SearchField--OTsh4KX.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./FieldBase-CZ_e8plx.js";import"./Typography-B48kpFr9.js";import"./useHighlightedText-aZdhyhaW.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";import"./useMenu-Bn-ufHFt.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuListDivider-gWW_DkP0.js";import"./MenuListHeading-CObV-6CL.js";import"./MenuItem-CrLVrhNO.js";import"./ItemMedia-SL7nkuf2.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./Heading-DNUoGPcg.js";import"./ItemControls-CxO-bUey.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./ChevronRight-DR_DMSPj.js";import"./InformationSquare-MLoftbJC.js";import"./MenuElipsisHorizontal-D8SBLf1r.js";import"./dialogs-DwyhIRkK.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BXJC4ma1.js";import"./AttachmentList-d4kX0rsh.js";import"./AttachmentLink-B9FSByvw.js";import"./File-DPxulbru.js";import"./Section-DmYaryGo.js";import"./Flex-BBCXBNec.js";import"./TransmissionList-CCyjxGz8.js";import"./Transmission-CKoIS6sU.js";import"./SeenByLog-BZ8TxhSV.js";import"./SeenByLogButton-Co1oizE0.js";import"./SeenByLogItem-BWO0kX4l.js";import"./Byline-iVPCQl5-.js";import"./Divider-B0ZQHXYE.js";import"./DialogActions-BU8ZSkvB.js";import"./ButtonGroupDivider-DIDGM_5s.js";import"./ChevronUp-Clh2aWfB.js";import"./ChevronDown-DHOBL84L.js";import"./DropdownBase-JE-hkhz-.js";import"./useClickOutside-eGIMdPQt.js";import"./ButtonGroup-DGe-ZwJP.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BM-aAa-z.js";import"./ItemLink-BKoe5vzb.js";import"./DialogByline-DFjgThPh.js";import"./DialogMetadata-DZY16Eo1.js";import"./DialogStatus-m_EUUQ3J.js";import"./MetaItem-D4UnnbYY.js";import"./ProgressIcon-kfyo4KG_.js";import"./Paperclip-C0W4M5q3.js";import"./Files-BdIvcjGk.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
