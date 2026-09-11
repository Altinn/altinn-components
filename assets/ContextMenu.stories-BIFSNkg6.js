import{a7 as t}from"./iframe-O8cJNgnH.js";import{S as b}from"./ArrowRedo-BtwXgg6D.js";import{S as v}from"./EyeClosed-DJHADSQh.js";import{S as I}from"./Archive-DONFQzGx.js";import{S as k}from"./Trash-BjtjrgTY.js";import{S as w}from"./ClockDashed-BJ20Nt8U.js";import{C as n}from"./ContextMenu-Da0OMBba.js";import{i as l}from"./inboxSearchResults-Dei165xl.js";import{S as u}from"./TeddyBear-C7R3FSHe.js";import{L as x}from"./List-BRiZNku9.js";import{D as d}from"./DialogListItem-DcpCukuT.js";import{L as g}from"./ListItem-DE6V7Ob0.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-MyvXNyzM.js";import"./Dropdown-DmhW7MY5.js";import"./SearchField-bcjP3Rbv.js";import"./MagnifyingGlass-DHpnscJf.js";import"./FieldBase-SXGcT6A1.js";import"./Typography-DU3EjiaL.js";import"./useHighlightedText-CnUjn7TA.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./Input-BfEZmvKD.js";import"./useMenu-BDnyYHA1.js";import"./MenuListItem-CQjZkQSb.js";import"./MenuListDivider-B5yo7PZG.js";import"./MenuListHeading-kFnOp7Lr.js";import"./MenuItem--4S_Ij0p.js";import"./ItemMedia-DQabxJtZ.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Checkmark-dNVTYLgC.js";import"./ItemLabel-C8aE3_ka.js";import"./Heading-BdhLm3SL.js";import"./ItemControls-Crhi56hp.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./ChevronRight-U0ooHRaY.js";import"./InformationSquare-CwO_8hH0.js";import"./MenuElipsisHorizontal-BSU1V6yq.js";import"./dialogs-Bn2faSDI.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-JupVPutP.js";import"./AttachmentList-DxbxyJ99.js";import"./AttachmentLink-CCDWy6Io.js";import"./File-CdfEIeiT.js";import"./Section-D1aETyw8.js";import"./Flex-oXvF6uEL.js";import"./TransmissionList-DCPxcJUJ.js";import"./Transmission-fWou_4WZ.js";import"./SeenByLog-CPxlK6f2.js";import"./SeenByLogItem-BLyGzyEQ.js";import"./Byline-DHjFQhcs.js";import"./SeenByLogButton-CyYt-urJ.js";import"./Divider-BCrvfH-b.js";import"./DialogActions-DPZFw2hu.js";import"./ButtonGroupDivider-yVY2TaYN.js";import"./ChevronUp-C3suJ612.js";import"./ChevronDown-D0blAyPo.js";import"./DropdownBase-D-Pu2S6_.js";import"./useClickOutside-CmPtGbdT.js";import"./ButtonGroup-BrPvP3j_.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-w8iqJ0BX.js";import"./ItemLink-BhEV87zL.js";import"./DialogByline-ptl3cQ5b.js";import"./DialogMetadata-CKb7oWAW.js";import"./DialogStatus-BjtIdxVW.js";import"./Paperclip-BHEobVqN.js";import"./Files-hLNnotQF.js";import"./MetaBase-DLYqDSye.js";import"./MetaItem-hGn9VjiB.js";import"./ProgressIcon-BrUJwtgp.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
