import{j as t}from"./iframe-CXxOXnma.js";import{S as o}from"./Handshake-DlrUPEc7.js";import{S as e}from"./Bell-CLfTfis7.js";import{S as s}from"./Hashtag-QDxj7wes.js";import{S as n}from"./Files-ClWPMzFl.js";import{A as p}from"./AccountListItem-BsPlY3fy.js";import{L as m}from"./List-CWN0grZu.js";import{A as l}from"./AccountListItemDetails-BzgMQeDL.js";import{B as c}from"./Button-Dot-dF6F.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CYy4MNIP.js";import"./ListItem-C7pcgmaV.js";import"./index-DvzmMrBu.js";import"./Input-jSu8pVt5.js";import"./tooltip-F-8CLWbq.js";import"./XMark-DvGwYctt.js";import"./Icon-CyU2k-nr.js";import"./Skeleton-DaZzKoDP.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./ChevronUp-C7KI3ypM.js";import"./ChevronDown-BI53cl-V.js";import"./ChevronRight-fDr-lddl.js";import"./HeartFill-CfcGO9BY.js";import"./ContextMenu-DWu5Hmy2.js";import"./useDropdownMenuController-DJy2cdVV.js";import"./Dropdown-Dq-7A4eI.js";import"./MenuElipsisHorizontal-Bm1EICSF.js";import"./SearchField-Bi4ovUnL.js";import"./MagnifyingGlass-D50FbQFC.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./Label-CsbjAOhP.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./Checkmark-CEwGjLXr.js";import"./ItemControls-D969--fk.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";import"./Flex-Cdw8i_ge.js";import"./Section-BI582Rxy.js";import"./ButtonGroup-DA7guRJP.js";import"./Divider-C-Mk1MAd.js";import"./SettingsItem-CYSxt_Lt.js";import"./SettingsItemBase-hOyKlpdl.js";import"./ItemLink-pXD4ggni.js";import"./SettingsModal-BLUe9oqE.js";import"./ModalBody-JOibBxNi.js";import"./ButtonIcon-DRTRl_zA.js";import"./ButtonLabel-BtrlG-5t.js";import"./AccountOrganization-DjkgpEFG.js";import"./Byline-BkcZgi9W.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
