import{a7 as t}from"./iframe-DK26OyRD.js";import{S as b}from"./ArrowRedo-DB0Yig8H.js";import{S as v}from"./EyeClosed-BgTeApbk.js";import{S as I}from"./Archive-Dptm87W-.js";import{S as k}from"./Trash-DH9PmhSG.js";import{S as w}from"./ClockDashed--Dlp0KHu.js";import{C as n}from"./ContextMenu-OoWwKfGw.js";import{i as l}from"./inboxSearchResults-DcXSgsyl.js";import{S as u}from"./TeddyBear-I1W1g322.js";import{L as x}from"./List-CCKc6phr.js";import{D as d}from"./DialogListItem-DUfcKM8E.js";import{L as g}from"./ListItem-DdxVCvKn.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-3-_gSr8-.js";import"./Dropdown-DKc7uAuj.js";import"./SearchField-Mgah0vbC.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./FieldBase-BNgybH8j.js";import"./Typography-DLY6k0s2.js";import"./useHighlightedText-dRdWwo97.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";import"./useMenu-0kp9W_Tl.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuListDivider-DYsLXAeP.js";import"./MenuListHeading-BjuGDozt.js";import"./MenuItem-X5ltzLjc.js";import"./ItemMedia-eL3WoD14.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./Heading-KMM5EtCs.js";import"./ItemControls-DNRsDyv1.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./ChevronRight-CgtnVZss.js";import"./InformationSquare-f4aulv5D.js";import"./MenuElipsisHorizontal-CE-njAYU.js";import"./dialogs-D2w1ac7y.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CPyzQDbT.js";import"./AttachmentList-CKJ8-JXx.js";import"./AttachmentLink-IWxxu5t2.js";import"./File-DbuB39SE.js";import"./Section-5gLqA0oM.js";import"./Flex-Bsp6DeeI.js";import"./TransmissionList-CQsXRj07.js";import"./Transmission-DZWT9EXh.js";import"./SeenByLog-83MZzMh_.js";import"./SeenByLogItem-DHlK5VDq.js";import"./Byline-c7qUJLHL.js";import"./SeenByLogButton-DHXIRNRf.js";import"./Divider-BVXfMNk1.js";import"./DialogActions-Cg_hMLaj.js";import"./ButtonGroupDivider-DQquDaG5.js";import"./ChevronUp-H846LjQF.js";import"./ChevronDown-BXSVxDRn.js";import"./DropdownBase-D8ScK27H.js";import"./useClickOutside-BSwmbeEL.js";import"./ButtonGroup-3GFoI2vi.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-C7L84IL-.js";import"./ItemLink-DFds8MDQ.js";import"./DialogByline-DT2-PzO0.js";import"./DialogMetadata-CdOAq2kr.js";import"./DialogStatus-CwSn1cap.js";import"./Paperclip-BQLfYgq_.js";import"./Files-BH3wPXtj.js";import"./MetaBase-DkIS27e6.js";import"./MetaItem-C_K_JgcL.js";import"./ProgressIcon-BLQRrev4.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
