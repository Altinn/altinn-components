var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-ITS-2hJr.js";import{S as I}from"./ArrowRedo-D2q7Of2H.js";import{S as k}from"./EyeClosed-CiVuKgqQ.js";import{S as w}from"./Archive-BfyIZBrU.js";import{S as B}from"./Trash-Cy_ISLKx.js";import{S as D}from"./ClockDashed-jbIYtePL.js";import{C as a}from"./ContextMenu-CNjz3p0p.js";import{i as u}from"./inboxSearchResults-Dc77cYEP.js";import{S as d}from"./TeddyBear-CH2de-DA.js";import{L as h}from"./List-B0u74Cjz.js";import{D as g}from"./DialogListItem-DGgaWYmL.js";import{L as y}from"./ListItem-5Rr0WNcR.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CM_xdbKo.js";import"./Dropdown-wTA40yAo.js";import"./SearchField-BL8KL877.js";import"./MagnifyingGlass-CFIOBciK.js";import"./FieldBase-CQGaRX-e.js";import"./Typography-8PAPF6ji.js";import"./useHighlightedText-B2HymlD1.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";import"./useMenu-Cz88jtED.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./ItemMedia-pMPhCUmI.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./Heading-Bdv6LYG9.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./ChevronRight-DGdpC6SO.js";import"./InformationSquare-Cv25qdYy.js";import"./MenuElipsisHorizontal-C0z8jRtS.js";import"./dialogs-C8iLE0u3.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Ccl8fln0.js";import"./AttachmentList-D-jzX0TA.js";import"./AttachmentLink-C-by3tVe.js";import"./File-BJbWXz_I.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./TransmissionList-BIEWZPEa.js";import"./Transmission-yxoSb9aG.js";import"./SeenByLog-C0xUL4m2.js";import"./SeenByLogItem-D1xWHZAK.js";import"./Byline-D-FlqTL-.js";import"./SeenByLogButton-DPP9-S3m.js";import"./Divider-XNCFH8Co.js";import"./DialogActions-Db9cjMRN.js";import"./ButtonGroup-B79-xqIF.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-3_cP2lbl.js";import"./ItemLink-Ck57Gq-9.js";import"./DialogByline-CxXxFhfg.js";import"./DialogMetadata-CZnLWcbp.js";import"./DialogStatus-CDWlEWKw.js";import"./Paperclip-BKWgRncJ.js";import"./Files-BXF6wYPQ.js";import"./MetaBase-DJ6Vkol-.js";import"./MetaItem-CKHMYbqq.js";import"./ProgressIcon-Dxgv-puh.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
