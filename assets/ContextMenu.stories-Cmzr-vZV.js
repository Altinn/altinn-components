var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-DliZ2j7V.js";import{S as I}from"./ArrowRedo-83MnwZeY.js";import{S as k}from"./EyeClosed-elgVJOvz.js";import{S as w}from"./Archive-COw0cazQ.js";import{S as B}from"./Trash-CR_vY-TR.js";import{S as D}from"./ClockDashed-CTPVNtLg.js";import{C as a}from"./ContextMenu-D6pTyVMF.js";import{i as u}from"./inboxSearchResults-C2Jjp0Ei.js";import{S as d}from"./TeddyBear-D9PF4It5.js";import{L as h}from"./List-BHc6Lwhq.js";import{D as g}from"./DialogListItem-DI5sfnC3.js";import{L as y}from"./ListItem-Br4SdUBJ.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-X1T9D1nQ.js";import"./Dropdown-BbS2MxJj.js";import"./SearchField-CHTtqi8q.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./FieldBase-CUazmIBl.js";import"./Typography-Oc42wyxk.js";import"./useHighlightedText-D1lssxtb.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./useMenu-Bhv2948N.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./ItemMedia-DsNtfucp.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./Heading-CtKubyco.js";import"./ItemControls-rcas_vti.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./ChevronRight-_BaSemP0.js";import"./InformationSquare-Bli9QzR2.js";import"./MenuElipsisHorizontal-CJN3iyyv.js";import"./dialogs-yERjf_5r.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CvQ33d_s.js";import"./AttachmentList-CPQgkKqF.js";import"./AttachmentLink-CJ-gQ8I4.js";import"./File-CxAzJXU6.js";import"./Section-DMRyqAwI.js";import"./Flex-BMB99n2z.js";import"./TransmissionList-7V2vh8Sg.js";import"./Transmission-CbiWnR5o.js";import"./SeenByLog-DFCrG15X.js";import"./SeenByLogItem-DX4DRpzs.js";import"./Byline-Dmr5VWky.js";import"./SeenByLogButton-CqaGD5mc.js";import"./Divider-DZaxc5v8.js";import"./DialogActions-BRBN_znC.js";import"./ButtonGroup-CWxuOyOz.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B9IKgDin.js";import"./ItemLink-MyE0gqTU.js";import"./DialogByline-Ccs6Oe3Z.js";import"./DialogMetadata-BLlfO67e.js";import"./DialogStatus-ubGtvk6f.js";import"./Paperclip-Dmp4shMN.js";import"./Files-CETeleKy.js";import"./MetaBase-f9CKAlb4.js";import"./MetaItem-B5lECDOL.js";import"./ProgressIcon-DCDpa8a4.js";import"./ChevronUp-yDNMXP2e.js";import"./ChevronDown-DO1dBJk1.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
