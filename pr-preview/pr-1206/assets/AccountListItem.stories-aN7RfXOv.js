import{p as t}from"./iframe-Ca1pxjCh.js";import{S as o}from"./Handshake-PsR7Rrkk.js";import{S as e}from"./Bell-C_D8qV0z.js";import{S as s}from"./Hashtag-Od1NLh9v.js";import{S as n}from"./Files-TRruNfjE.js";import{A as p}from"./AccountListItem-RItmn4XP.js";import{A as m}from"./AccountListItemDetails-_9VrKu_S.js";import{B as l}from"./Button-BUoYLOjU.js";import{L as c}from"./List-m_iXYTHM.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DKdvhqLE.js";import"./ListItem-ByBUwGe5.js";import"./index-qsemo-NB.js";import"./Input-CnEzvrKf.js";import"./tooltip-DBInG_0S.js";import"./XMark-D_G5yHBr.js";import"./Icon-DX2teY26.js";import"./Skeleton-CjJRr45L.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./Heading-BWtrIkld.js";import"./useHighlightedText-B4z3dUTF.js";import"./ChevronUp-njmytnHj.js";import"./ChevronDown-BSf8h3gX.js";import"./ChevronRight-Dx7-HhpA.js";import"./HeartFill-l7YS5VL-.js";import"./ContextMenu-CZ_jSmTp.js";import"./useDropdownMenuController-D-Vc94VJ.js";import"./Dropdown-mQdbulVM.js";import"./SearchField-CQtbSmEr.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./Label-Dpkw0Wq9.js";import"./useMenu-CVV4ErAO.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./Checkmark-BNq65g6F.js";import"./ItemControls-CcgtvJvT.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./MenuElipsisHorizontal-Bwy8rMfn.js";import"./Section-BSLTGuDV.js";import"./Flex-CU26bbCS.js";import"./ButtonGroup-Bt3kIkZr.js";import"./Divider-PfDhNxjV.js";import"./SettingsItem-B_rocGkp.js";import"./SettingsItemBase-BRIpfFkf.js";import"./ItemLink-BZQvVEJ1.js";import"./SettingsModal-BhsIDBtl.js";import"./ModalBody-DfLjWzAx.js";import"./ButtonIcon-DcnGBPH8.js";import"./ButtonLabel-VpsJZKmQ.js";import"./AccountOrganization-N6Z71dty.js";import"./Byline-Bxl3RlNN.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
